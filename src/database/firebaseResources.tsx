import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const AuthComponent = (StyledFirebaseAuth as any).default
  ? (StyledFirebaseAuth as any).default
  : StyledFirebaseAuth;

export const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCEgh5mDAANNJTWfK5uvvLh6ctY23uZ32Q",
  authDomain: "embedded-rox.firebaseapp.com",
  projectId: "embedded-rox",
  storageBucket: "embedded-rox.appspot.com",
  messagingSenderId: "523981558457",
  appId: "1:523981558457:web:4799766c2b736cd1ac0168",
  measurementId: "G-JBBP24S0PD",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// console.log("xyz", auth.useDeviceLanguage());
export const database = getFirestore(app);
export const analytics = getAnalytics(app);

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
