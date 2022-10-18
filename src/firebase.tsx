// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC93v4WM3ZfVp5J_NSBGjluZRc58kQTt_w",
  authDomain: "crud-story.firebaseapp.com",
  projectId: "crud-story",
  storageBucket: "crud-story.appspot.com",
  messagingSenderId: "9639505791",
  appId: "1:9639505791:web:a55b495a2e796802dd344a",
  measurementId: "G-806T9LBPMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export const db =getFirestore(app);