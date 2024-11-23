const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const { pipeline } = require("stream");
const { promisify } = require("util");
const pipelineAsync = promisify(pipeline);
const rateLimit = require("express-rate-limit");
const admin = require("firebase-admin");

dotenv.config();

// Initialize Firebase Admin SDK
admin.initializeApp();

const app = express();
app.use(cors());
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 15, // Limit each IP to 15 requests per windowMs
  standardHeaders: true,
  legacyHeaders: true,
});
app.use(limiter);

// Capture and log user IP addresses
app.use((req, res, next) => {
  const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("User IP Address:", userIP);
  next();
});

// Dynamic allowed origins based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://embedded-rox.app", "http://localhost:4445"]
    : ["https://embedded-rox.app", "http://localhost:4445"];

// Middleware to check the Referer or Origin header
app.use((req, res, next) => {
  const origin = req.headers.origin || req.headers.referer;
  if (
    !origin ||
    !allowedOrigins.some((allowedOrigin) => origin.startsWith(allowedOrigin))
  ) {
    return res.status(403).send({ error: "invalid" });
  }
  next();
});

// Middleware to verify App Check tokens
async function verifyAppCheckToken(req, res, next) {
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    console.warn("Request missing App Check token. Rejecting request.");
    res.status(401).send({ error: "App Check token missing" });
    return;
  }

  try {
    await admin.appCheck().verifyToken(appCheckToken);
    next();
  } catch (err) {
    console.error("Invalid App Check token:", err);
    res.status(401).send({ error: "Invalid App Check token" });
  }
}

// Function to calculate the number of characters
function calculateCharacterCount(messages) {
  return messages.reduce((total, message) => {
    return total + (message.content ? message.content.length : 0);
  }, 0);
}

// Apply the App Check middleware to your route
app.post("/prompt", verifyAppCheckToken, async (req, res) => {
  try {
    const { model, messages, ...restOfApiParams } = req.body;

    // Construct the payload for OpenAI API
    const constructor = {
      model: "gpt-4o-mini",
      messages: messages || [],
      stream: true, // Enable streaming
      ...restOfApiParams,
    };

    // Make the OpenAI API call using node-fetch
    const openaiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(constructor),
      }
    );

    if (openaiResponse.status === 429) {
      const retryAfter = openaiResponse.headers.get("Retry-After") || "300";
      res.setHeader("Retry-After", retryAfter);
      return res.status(429).send({
        error: "Rate limit exceeded.",
        retryAfter: retryAfter,
      });
    }

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.statusText}`);
    }

    // Set headers to keep the connection alive for streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Directly pipe the OpenAI stream to the client without modification
    openaiResponse.body.pipe(res, { end: true });
  } catch (error) {
    console.error("Error generating completion:", error);
    res.status(500).send({ error: error.message });
  }
});

exports.app = functions.https.onRequest(app);
