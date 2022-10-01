// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc, setDoc, addDoc} from 'firebase/firestore';
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
function writeMovies(){
    const docData ={
        Title:'The Grey',
        Rating:'',
        Length:'',
    };
    setDoc(Movies, docData, {merge: true})
    .then(()=>{
        //this wont get called if you're offlline
        console.log('This value has been written to the database');

    })
    .catch((error)=> {
        console.log(`I got an error! ${error}`);
    });
}
const moviesCollection = collection(firestore, 'Movies');
async function addANewDocument(){
    const newDoc = await addDoc (moviesCollection,)
}
const firestore = getFirestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);