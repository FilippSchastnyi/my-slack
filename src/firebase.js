import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore'

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

export {db}
