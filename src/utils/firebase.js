// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNp2kjGd3OBKB8_z7hhJ0SZar2rfMACSA",
  authDomain: "netflixgpt4-6e968.firebaseapp.com",
  projectId: "netflixgpt4-6e968",
  storageBucket: "netflixgpt4-6e968.appspot.com",
  messagingSenderId: "600838482422",
  appId: "1:600838482422:web:f6c46b82f2b09a6d0dbfd7",
  measurementId: "G-P0D5W3TX9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();