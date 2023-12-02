// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAda6cNcoR_PTRVhgGusyWlR75rwV2gysM",
  authDomain: "parrot-app-3f0a3.firebaseapp.com",
  projectId: "parrot-app-3f0a3",
  storageBucket: "parrot-app-3f0a3.appspot.com",
  messagingSenderId: "53256044707",
  appId: "1:53256044707:web:a8b6028eb7d3f0582fff16",
  measurementId: "G-6M58ZC4B9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export const db = getFirestore(app)