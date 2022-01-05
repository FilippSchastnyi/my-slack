import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "my-slack-91566.firebaseapp.com",
  projectId: "my-slack-91566",
  storageBucket: "my-slack-91566.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db, provider, auth}
