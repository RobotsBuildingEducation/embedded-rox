import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import Lottie from "react-lottie";
import _ from "lodash";
import isEmpty from "lodash/isEmpty";
import { database } from "./database/firebaseResources";
// import { getTotalImpactFromModules } from "./common/uiSchema";
import {
  decentralizedEducationTranscript,
  userProgression,
  userUnlocks,
  userWatches,
} from "./App.constants";
import { FadeInComponent, japaneseThemePalette } from "./styles/lazyStyles";
import { CodeDisplay } from "./common/ui/Elements/CodeDisplay/CodeDisplay";

import chat_loading_animation from "./common/anims/chat_loading_animation.json";
import roxanaGif from "./common/media/images/roxanaGif.gif";
import { useEffect } from "react";
import StreamLoader from "./common/ui/Elements/StreamLoader/StreamLoader";

export let unlockEverything = async (userStateReference) => {
  await updateDoc(userStateReference.userDocumentReference, {
    unlocks: {
      Philosophy: true,
      "Learning Mindset & Perspective": true,
      "Lesson 3 Backend Engineering": true,
      "Lesson 5 Computer Science": true,
      "Resume Writing": true,
      "Lesson 4 Building Apps & Startups": true,
      "Lesson 2 Frontend Programming": true,
      "Focus Investing": true,
      "Interactions & Design": true,
      "Lesson 1 Coding Fundamentals": true,
      "The Psychology Of Self-esteem": true,
    },
    watches: {
      Philosophy: true,
      "Learning Mindset & Perspective": true,
      "Resume Writing": true,
      "Lesson 1 Coding Fundamentals": true,
      "Lesson 3 Backend Engineering": true,
      "Interactions & Design": true,
      "Lesson 5 Computer Science": true,
      "Focus Investing": true,
      "Lesson 4 Building Apps & Startups": true,
      "Lesson 2 Frontend Programming": true,
      "The Psychology Of Self-esteem": true,
    },
    progress: {
      "Lesson 3 Backend Engineering": true,
      "Focus Investing": true,
      "Lesson 2 Frontend Programming": true,
      "Lesson 4 Building Apps & Startups": true,
      "Interactions & Design": true,
      "Resume Writing": true,
      "Lesson 1 Coding Fundamentals": true,
      "The Psychology Of Self-esteem": true,
      "Lesson 5 Computer Science": true,
      "Learning Mindset & Perspective": true,
      Philosophy: true,
    },
  });

  // await updateWebNodeRecord(web5Reference, dwnRecordSet, unlocks);

  userStateReference.setDatabaseUserDocument((prevDoc) => ({
    ...prevDoc,
    unlocks: {
      Philosophy: true,
      "Learning Mindset & Perspective": true,
      "Lesson 3 Backend Engineering": true,
      "Lesson 5 Computer Science": true,
      "Resume Writing": true,
      "Lesson 4 Building Apps & Startups": true,
      "Lesson 2 Frontend Programming": true,
      "Focus Investing": true,
      "Interactions & Design": true,
      "Lesson 1 Coding Fundamentals": true,
      "The Psychology Of Self-esteem": true,
    },
  }));
};

/**
 * Sorts an array of emotion objects by their timestamp property and groups them by month and year.
 * @param {Object[]} usersEmotionsFromDB - The array of emotion objects fetched from the database.
 * Each object should have a 'timestamp' property representing the time the emotion was recorded.
 * @returns {Object} An object with keys as 'Month Year' strings and values as arrays of emotion objects
 * that fall within that month and year.
 */
export const sortEmotionsByDate = (usersEmotionsFromDB) => {
  let insertTestDate = usersEmotionsFromDB;

  let sortedDates =
    insertTestDate?.length > 0
      ? insertTestDate?.sort((a, b) => a?.timestamp - b?.timestamp)
      : [];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const groupedByMonthYear = {};

  sortedDates.forEach((item) => {
    const date = new Date(item.timestamp);
    const month = date.getMonth(); // JavaScript months are 0-based
    const year = date.getFullYear();

    const key = `${monthNames[month]} ${year}`;

    if (!groupedByMonthYear[key]) {
      groupedByMonthYear[key] = [];
    }

    groupedByMonthYear[key].push(item);
  });

  return groupedByMonthYear;
};

/**
 *
 * sets up user's data in database document for the first time or retrieves it and sets it to state.
 */
export const setupUserDocument = async (
  docRef,
  userStateReference,
  uniqueID
  // web5
) => {
  const res = await getDoc(docRef);

  console.log("RES", res.data());

  if (!res?.data()) {
    // let result = await web5?.dwn?.records?.create({
    //   data: {
    //     protocol: "https://embedded-rox.app",
    //     ...userUnlocks,
    //   },
    //   message: {
    //     dataFormat: "application/json",
    //     published: true,
    //   },
    // });
    let accs = parseInt(localStorage.getItem("accs") || "0", 10);

    // Check if the user has already generated 3 questions
    // if (accs >= 3) {
    //   // Silently skip the function
    //   return;
    // }

    // // Increment the counter and store it back in localStorage
    // accs += 1;
    // localStorage.setItem("accs", accs);

    try {
      await setDoc(docRef, {
        impact: 0,
        userAuthObj: {
          uid: uniqueID,
        },
        profile: decentralizedEducationTranscript,
        progress: userProgression,
        unlocks: userUnlocks,
        watches: userWatches,
        firstVisit: true,
        displayName: localStorage.getItem("displayName"),
        nostrPubKey: localStorage.getItem("local_npub"),
      });
    } catch (error) {
      console.log("failed to create", error);
    }
    const response = await getDoc(docRef);

    console.log("DRESS", response.data());
    userStateReference.setDatabaseUserDocument(response.data());
    // addKnowledgeStep(
    //   "1",
    //   "Launched a decentralized AI assistant that works inside of social media and started their first session with us at embedded-rox.app.",
    //   "Got started",
    //   "get-started"
    // );
  } else {
    console.log("HOLD ON", res.data());

    // consider updates from a DWN that wont be saved to your database
    // right now you don't need it because you're managing UI with fb already and there's no impact for wiring it in.
    // so what this means is that web5 is more concerned with decentralized messaging than it is the state of UI
    if (res?.data()?.firstVisit) {
      await updateDoc(docRef, {
        firstVisit: false,
      });
    }

    // if (localStorage.getItem("uniqueId") === "did:key:shared_global_account") {
    //
    // }

    console.log("res data", res.data());
    if (res?.data()?.nostrPubKey) {
      localStorage.setItem("local_npub", res?.data()?.nostrPubKey);
    }
    if (res?.data()?.displayName) {
      localStorage.setItem("displayName", res?.data()?.displayName);
    }

    const response = await getDoc(docRef);

    userStateReference.setDatabaseUserDocument(response.data());

    await addKnowledgeStep(
      "1",
      "Launched a decentralized AI assistant that works inside of social media and started their first session with us at embedded-rox.app.",
      "Got started",
      "get-started"
    );

    addKnowledgeStep(
      "2",
      "Returned to the application learn another time.",
      "Returning e  ffort",
      "returning-effort"
    );
  }
};

/**
 *
 * defines global data that gets displayed in the app.
 */
export const updateGlobalCounters = async (
  globalImpactDocRef,

  globalStateReference
) => {
  const [globalImpactRes] = await Promise.all([getDoc(globalImpactDocRef)]);

  globalStateReference.setGlobalLeaderName(globalImpactRes.data().discord);
  globalStateReference.setGlobalLevelCounter(globalImpactRes.data().level);
  globalStateReference.setGlobalImpactCounter(globalImpactRes.data().total);
  globalStateReference.setGlobalScholarshipCounter(
    globalImpactRes.data().scholarships
  );
};

/**
 *
 * runs when the app loads or when a user switches accounts.
 * goes through global/user collections and sets app ux state.
 *
 */
export const handleUserAuthentication = async (appFunctions) => {
  let _uniqueId = localStorage.getItem("uniqueId") || _.uniqueId("rbe-");
  localStorage.setItem("uniqueId", _uniqueId);

  const docRef = doc(database, "users", _uniqueId);
  // console.log("DOC", docRef);

  // const globalImpactDocRef = doc(database, "global", "impact");

  await setupUserDocument(
    docRef,
    appFunctions.userStateReference,
    _uniqueId
    // appFunctions?.web5
  );
  // await updateGlobalCounters(
  //   globalImpactDocRef,
  //   appFunctions.globalStateReference
  // );

  appFunctions.userStateReference.setUserDocumentReference(docRef);
  const usersEmotionsCollectionRef = collection(docRef, "emotions");

  // appFunctions.globalStateReference.setGlobalDocumentReference(
  //   globalImpactDocRef
  // );
  appFunctions.userStateReference.setUsersEmotionsCollectionReference(
    usersEmotionsCollectionRef
  );
  appFunctions.updateUserEmotions(usersEmotionsCollectionRef);
  // appFunctions.uiStateReference.setProofOfWorkFromModules(
  //   getTotalImpactFromModules()
  // );
};

/**
 * updates user impact and global impact in database and state
 */
export const updateImpact = async (
  impact,
  userStateReference,
  globalStateReference
) => {
  const {
    databaseUserDocument,
    userDocumentReference,
    setDatabaseUserDocument,
  } = userStateReference;
  const {
    globalImpactCounter,
    globalDocumentReference,
    setGlobalImpactCounter,
  } = globalStateReference;

  if (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) {
    await updateDoc(userDocumentReference, {
      impact: databaseUserDocument?.impact + impact,
    });

    const refreshedImpactDocument = doc(database, "global", "impact");

    // Fetch the document
    let refreshedImpactData = await getDoc(refreshedImpactDocument).then(
      (docSnap) => {
        if (docSnap.exists()) {
          return docSnap.data().total;
        }
      }
    );

    await updateDoc(globalDocumentReference, {
      total: (refreshedImpactData || globalImpactCounter) + impact,
    });

    setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      impact: prevDoc?.impact + impact,
    }));

    setGlobalImpactCounter((prevCounter) => prevCounter + impact);
  } else {
  }
};

/**
 * similar to updating impact, we need to update the user's level and global state level since we display a leaderboard
 */
export const updateLevel = async (
  level,
  discordTag,
  userStateReference,
  globalStateReference
) => {
  const {
    databaseUserDocument,
    userDocumentReference,
    setDatabaseUserDocument,
  } = userStateReference;
  const {
    globalImpactCounter,
    globalDocumentReference,
    setGlobalLevelCounter,
    setGlobalLeaderName,
  } = globalStateReference;

  if (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) {
    await updateDoc(userDocumentReference, {
      level: level + 1,
    });

    if (level + 1 >= globalStateReference?.globalLevelCounter) {
      await updateDoc(globalDocumentReference, {
        level: level + 1,
        discord: discordTag,
      });

      setGlobalLevelCounter(level + 1);
      setGlobalLeaderName(discordTag);
    }

    setDatabaseUserDocument((prevDoc) => ({
      ...prevDoc,
      level: level + 1,
    }));

    // setGlobalImpactCounter((prevCounter) => prevCounter + impact);
  } else {
  }
};

/*
 *
 * defines a random color from the japanese theme palette
 */
export let getRandomColor = () => {
  const keys = Object.keys(japaneseThemePalette);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const color = japaneseThemePalette[randomKey];

  // Handle empty or undefined color values
  if (!color || color === "") {
    return getRandomColor(); // Recursively call the function until a valid color is found
  }

  return color;
};

/**
 * copies string to clipboard
 */
export let copyToClipboard = (data) => {
  if (data) {
    // Use the Clipboard API to copy the value to the clipboard
    navigator.clipboard
      .writeText(data)
      .then(() => {
        console.log("UniqueId has been copied to the clipboard successfully.");
      })
      .catch((err) => {
        console.error("Failed to copy uniqueId to the clipboard:", err);
      });
  } else {
    console.log("UniqueId not found in local storage.");
  }
};

/**
 * creates a visual signal when a copy button or event is pressed
 */
export let animateBorderLoading = async (
  stateAnimator,
  styleObjectAfter,
  styleObjectBefore,
  pause = 750
) => {
  stateAnimator(styleObjectAfter);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(pause);

  stateAnimator(styleObjectBefore);
};

/**
 *
 * gets the data from a nested collection inside of a user
 */
export const getCollectionDocumentsInsideUser = async (collectionRef) => {
  let set = [];
  await getDocs(collectionRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data()) set.push(doc.data());
    });
  });

  return set;
};

// Calculate the compute percentage
export const computePercentage = (userImpact, proofOfWork) => {
  return (userImpact || 0) / (proofOfWork || 77500);
};

export const completeZapEvent = (
  zap,
  updateImpact,
  userStateReference,
  globalStateReference
) => {
  if (
    localStorage.getItem("patreonPasscode") ===
    import.meta.env.VITE_BITCOIN_PASSCODE
  ) {
    zap().then((lightningResponse) => {
      if (lightningResponse?.preimage) {
        updateImpact(1, userStateReference, globalStateReference);
      }
    });
  }
};

/**
 *
 * This is an example of bad code.
 * The position of the code matters and determines how it executes.
 * There's pretty much no way to know that without intentionally testing it.
 * This happened because I was writing at like 3 AM and refused to use my brain.
 * It was easier to be stubborn.
 */
export const GetLandingPageMessage = ({ unlocks, dataLoading }) => {
  let message = (
    <div>
      Congratulations! You have completed all lectures. Now it's time to build.
    </div>
  );

  if (!unlocks?.["Philosophy"]) {
    message = (
      <div>
        🤔 Dive into the depths of 'Philosophy' and explore existential
        questions that have intrigued thinkers for centuries.
        <br />
        <br />
        Suggestion: The debate between <em>Determinism</em> and{" "}
        <em>Free Will</em>.
      </div>
    );
  }
  if (!unlocks?.["Resume Writing"]) {
    message = (
      <div>
        📄 Elevate your career with our Resume Writing lecture. Learn how to
        present your skills compellingly and professionally.
        <br />
        <br />
        Suggestion: Use action verbs and quantifiable achievements to make your
        resume stand out!
      </div>
    );
  }
  if (!unlocks?.["The Psychology Of Self-esteem"]) {
    message = (
      <div>
        🧠 Boost your confidence and unlock your potential with our 'Psychology
        Of Self-esteem' lecture. Understand the cognitive biases that shape your
        self-image.
        <br />
        <br />
        Suggestion: <em>Cognitive Behavioral Techniques</em> to improve personal
        perception.
      </div>
    );
  }
  if (!unlocks?.["Focus Investing"]) {
    message = (
      <div>
        💵 Make informed financial decisions with Focus Investing. Learn about
        markets, assets, and portfolio strategies.
        <br />
        <br />
        Suggestion: Dive into <em>Index Funds</em> for a diversified and less
        risky investment portfolio.
      </div>
    );
  }
  if (!unlocks?.["Interactions & Design"]) {
    message = (
      <div>
        🎨 Interactions & Design isn't just about aesthetics. It’s about making
        apps people love to use.
        <br />
        <br />
        Suggestion: Use principles of <em>User-Centered Design</em> to improve
        the usability of your projects.
      </div>
    );
  }
  if (!unlocks?.["Lesson 5 Computer Science"]) {
    message = (
      <div>
        💻 Advance your tech career with 'Lesson 5 in Computer Science'. Tackle
        complex algorithms and data structures that are essential for
        problem-solving.
        <br />
        <br />
        Suggestion: Implement a <em>Binary Search Tree</em> from scratch.
      </div>
    );
  }
  if (!unlocks?.["Lesson 4 Building Apps & Startups"]) {
    message = (
      <div>
        🚀 Turn ideas into reality in Building Apps & Startups. From ideation to
        MVP, learn what it takes to start up.
        <br />
        <br />
        Suggestion: Build a simple <em>To-Do List</em> app with React to manage
        your startup tasks.
        <br />
        <br />
        Challenge: understand how this code works.
        <br />
        <br />
        <CodeDisplay
          code={`
import React, { 
  useState 
} from 'react';

import { 
  initializeApp 
} from "firebase/app";

import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "firebase/auth";

import { 
  getFirestore, 
  doc, 
  setDoc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 
    "YOUR_API_KEY",
  authDomain: 
    "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: 
    "YOUR_PROJECT_ID",
  storageBucket: 
    "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: 
    "YOUR_SENDER_ID",
  appId: 
    "YOUR_APP_ID",
};

const app = initializeApp(
  firebaseConfig
);

const auth = getAuth(app);
const firestore = getFirestore(app);

const UserRegistration = () => {
  const [
    email, 
    setEmail
  ] = useState('');

  const [
    password, 
    setPassword
  ] = useState('');

  const handleRegister = async (e) => 
  {
    e.preventDefault();
    try {
      const userCredential = await 
        createUserWithEmailAndPassword(
          auth, 
          email, 
          password
        );

      const user = userCredential
        .user;

      await setDoc(
        doc(
          firestore, 
          "users", 
          user.uid
        ), 
        { 
          uid: user.uid 
        }
      );

      alert(
        "User registered and UID stored in Firestore."
      );
    } catch (error) {
      alert(
        'Failed to register: \${error.message}'
      );
    }
  };

  return (
    <form 
      onSubmit={
        handleRegister
      }
    >
      <input
        type="email"
        value={email}
        onChange={
          (e) => setEmail(
            e.target.value
          )
        }
        placeholder="Email"
        required
      />

      <input
        type="password"
        value={password}
        onChange={
          (e) => setPassword(
            e.target.value
          )
        }
        placeholder="Password"
        required
      />

      <button 
        type="submit"
      >
        Register
      </button>

    </form>
  );
};

export default UserRegistration;


// vs.

import { Web5 } from "@web5/api/browser";
import { 
  doc, 
  setDoc, 
  getFirestore 
} from "firebase/firestore";

async function connectAndStoreDID() {
  try {
    const web5 = await Web5.connect();
    const did = web5?
      .did?
      .agent?
      .agentDid;

    const didDoc = {
        did: did,
    };

    await setDoc(doc(firestore, "users", did), didDoc);

    console.log("Web5 DID stored in Firestore:", did);

  } catch (error) {
    console.error(
      "Error connecting to Web5 or storing DID:", 
      error
    );

    connectAndStoreDID();
  }
}
`}
        />
      </div>
    );
  }
  if (!unlocks?.["Lesson 3 Backend Engineering"]) {
    message = (
      <div>
        🔧 Unleash the power of server-side technologies with Backend
        Engineering. Delve into databases, APIs, and server logic.
        <br />
        <br />
        Suggestion: Create a RESTful API using Node.js and Express to handle
        user authentication.
        <br />
        <br />
        Challenge: understand how this code works.
        <br />
        <br />
        <CodeDisplay
          code={`
const functions = require(
  'firebase-functions'
);

const express = require(
  'express'
);

const cors = require('cors');

const { 
  Configuration,
  OpenAIApi 
} = require("openai");

const app = express();
app.use(cors({ origin: true }));

const apiKey = functions
  .config()
  .openai
  .key;

const configuration = new Configuration(
  { apiKey }
);

const openai = new OpenAIApi(
  configuration
);

app.post(
  '/chat-completion', 
  async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(400)
        .send({ 
          error: 'No prompt provided' 
        });
    }

    try {
      const response = await openai
        .createCompletion({
          model: "gpt-4-turbo",
          prompt: prompt,
        });

      res.send({ 
        message: response
          .data
          .choices[0]
          .text
          .trim() 
      });
    } catch (error) {

        res
        .status(500)
        .send({ 
          error: error.message 
        });
    }
});

exports.api = functions
  .https
  .onRequest(app);
        `}
        />
      </div>
    );
  }
  if (!unlocks?.["Lesson 2 Frontend Programming"]) {
    message = (
      <div>
        🌐 Beautify the web in Frontend Programming. Learn CSS tricks,
        JavaScript frameworks, and responsive design.
        <br />
        <br />
        Suggestion: Develop an interactive homepage with CSS animations and
        JavaScript interactivity.
        <br />
        <br />
        Challenge: understand how this code works.
        <br />
        <br />
        <CodeDisplay
          code={`
import React, { 
  useState 
} from 'react';

import { 
  Form, 
  Button, 
  Container, 
  Row, 
  Col, 
  InputGroup, 
  FormControl 
} from 'react-bootstrap';

import { Rox } 
  from './Rox';

const ChatForm = () => {
  const [
    prompt, 
    setPrompt
  ] = useState('');

  const [
    response, 
    setResponse
  ] = useState('');

  const rox = new Rox(
    "sk-4BsXnToXYr"
  );

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    const chatResponse = await 
      rox.getChatCompletion(
        prompt
      );

    setResponse(
      chatResponse
    );
  };

  return (

<>
  <Form 
    onSubmit={
      handleSubmit
    }
  >
    <InputGroup 
      className="mb-3"
    >

      <FormControl
        placeholder={
          "Enter prompt"
        }
        aria-label="Prompt"
        onChange={e => {
          setPrompt(
            e.target.value
          )
        }}
        value={prompt}
      />

      <Button 
        variant="primary" 
        type="submit"
      >
        Send
      </Button>
    </InputGroup>
  </Form>

  <div>
    <strong>
      Response:
    </strong> 

    <p>
      {response}
    </p>
  </div>
</>
);};

export default ChatForm;
`}
        />
      </div>
    );
  }
  if (!unlocks?.["Lesson 1 Coding Fundamentals"]) {
    message = (
      <>
        <div>
          🪆 Begin your coding journey with Coding Fundamentals and learn the
          foundations of object oriented programming.
          <br />
          <br />
          Suggestion: Write a simple calculator in Python to solidify your
          understanding of basic programming constructs. Then figure out how my
          mind works!
          <br />
          <br />
          Challenge: understand how this code works.
          <br />
          <br />
        </div>
        <CodeDisplay
          code={`
const {
  Configuration, 
  OpenAIApi 
} = require("openai");

class Rox {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.configuration = new Configuration({
      apiKey: this.apiKey
    });

    this.openai = new OpenAIApi(
      this.configuration
    );
  }


  async getChatCompletion(prompt)
  {
    try {
      const response = await this.openai
        .createCompletion({
            model: "gpt-4-turbo", 
            prompt: prompt,
          });

      console.log(
        "API response received:"
      );

      return response.data.choices[0]
        .text
        .trim();

    } catch (error) {
      return "Error in fetching response.";
    }
  }
}

(async () => {
  const rox = new Rox("sk-4BsXnToXYr");
  const prompt = "Tell me a joke.";
  const response = await rox
    .getChatCompletion(prompt);

  console.log(
    "Chat Response:",
    response
  );
})();
        `}
        />
      </>
    );
  }
  if (!unlocks?.["Learning Mindset & Perspective"]) {
    message = (
      <div>
        🧠 Adopt a learner’s mindset in Learning Mindset & Perspective. Explore
        techniques to enhance your learning efficiency.
        <br />
        <br />
        Suggestion: Practice mind mapping to visualize complex concepts.
        <br />
        <br />
        Challenge: Go through all the videos as quickly as possible! Progress is
        a good incentive to continue making more progress.
      </div>
    );
  }

  if (dataLoading) {
    message = <div>Checking progress...</div>;
  }
  return message;
};

export const isLocalStorageValid = () => {
  return (
    localStorage.getItem("patreonPasscode") ===
      import.meta.env.VITE_PATREON_PASSCODE ||
    localStorage.getItem("patreonPasscode") ===
      import.meta.env.VITE_PATREON_PASSCODE
  );
};

/**
 *
 * used when calling openai or simulating loads
 */
export let RoxanaLoadingAnimation = ({
  header = null,
  nochat = false,
  intel = false,
}) => {
  return (
    <FadeInComponent>
      <div>
        {nochat ? null : (
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: chat_loading_animation,
            }}
            width={60}
            height={60}
            style={{ marginLeft: intel ? "185px" : "105px" }}
          />
        )}

        <img width="150px" src={roxanaGif} />
      </div>

      {/* {header ? <h3>{header}</h3> : null} */}

      <StreamLoader />
    </FadeInComponent>
  );
};

export const renderTranscriptAwards = (profileData) => {
  if (isEmpty(profileData)) {
    return (
      <div>
        No data is available. <br />
        <br />
      </div>
    );
  }

  let awards = [];

  for (const key in decentralizedEducationTranscript) {
    awards.push(
      <div
        id={`${key}`}
        label={`${key}`}
        style={{
          width: 125,
          height: 125,
          backgroundColor: profileData[key]
            ? "rgba(13,41,179, 1)"
            : "rgba(206, 206, 214,0.3)",
          margin: 2,
          border: profileData[key]
            ? "5px solid rgba(0,0,255, 1)"
            : "5px solid gray",
          borderRadius: "20%",
          padding: 5,
        }}
      >
        {key}
      </div>
    );
  }

  return awards;
};

export const addKnowledgeStep = async (step, knowledge, label, collectorId) => {
  try {
    const userDocRef = doc(database, "users", localStorage.getItem("uniqueId"));
    const knowledgeCollectionRef = collection(userDocRef, "knowledge");

    await runTransaction(database, async (transaction) => {
      const userDocSnapshot = await transaction.get(userDocRef);
      if (!userDocSnapshot.exists()) {
        throw new Error("User document does not exist!");
      }

      const userDocData = userDocSnapshot.data();
      const knowledgeKeys = userDocData.knowledgeKeys || [];

      if (knowledgeKeys.includes(collectorId)) {
        console.log("Knowledge already exists. No update necessary.");
        return;
      }

      // Add the knowledge document
      const knowledgeDocRef = await addDoc(knowledgeCollectionRef, {
        step: step,
        label: label,
        knowledge: knowledge,
      });

      console.log("knowledge document reference", knowledgeCollectionRef);

      // Update the user's knowledgeKeys array
      transaction.update(userDocRef, {
        knowledgeKeys: [...knowledgeKeys, collectorId],
      });
    });
  } catch (error) {
    console.log({ error });
    console.error("Error writing document and updating user: ", error);
  }
};

export const ScrollComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Window is scrolling");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>Scroll to see the effect in action!</div>;
};

export default ScrollComponent;
