// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_FIREBASE_API,
  authDomain: "business-directory-cf2d5.firebaseapp.com",
  projectId: "business-directory-cf2d5",
  storageBucket: "business-directory-cf2d5.appspot.com",
  messagingSenderId: "893323368009",
  appId: "1:893323368009:web:daa2df416370259ca79198",
  measurementId: "G-G335TH5PH4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
