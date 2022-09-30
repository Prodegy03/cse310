// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY8o2-3QglzeFukqGeqedKUULIyQ_aFYw",
  authDomain: "christensen-plex-media.firebaseapp.com",
  databaseURL: "https://christensen-plex-media-default-rtdb.firebaseio.com",
  projectId: "christensen-plex-media",
  storageBucket: "christensen-plex-media.appspot.com",
  messagingSenderId: "476379291040",
  appId: "1:476379291040:web:555468cd4528482dc2d8c5",
  measurementId: "G-TJKTCX4NB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);