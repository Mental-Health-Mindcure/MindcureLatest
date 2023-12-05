// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD02CecECX1g6PaE2b0oOOo7COz3AMeRMQ",
    authDomain: "mood-swinger-a7e80.firebaseapp.com",
    projectId: "mood-swinger-a7e80",
    storageBucket: "mood-swinger-a7e80.appspot.com",
    messagingSenderId: "602194697128",
    appId: "1:602194697128:web:6408aa51f1966b9f081b9d",

  // apiKey: "AIzaSyCuszV3kPAgpNvtTKZk21aO5j9BiQR6JEk",
  // authDomain: "mindcuresignin.firebaseapp.com",
  // databaseURL: "https://mindcuresignin-default-rtdb.firebaseio.com",
  // projectId: "mindcuresignin",
  // storageBucket: "mindcuresignin.appspot.com",
  // messagingSenderId: "882690377959",
  // appId: "1:882690377959:web:48024cf0185feba843ba42",
  // measurementId: "G-KVQ0ZC138S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
