// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBGm_S1y5Trbg6Ffj_XKRLN0odGVQGt_4",
  authDomain: "instagram-e0057.firebaseapp.com",
  projectId: "instagram-e0057",
  storageBucket: "instagram-e0057.appspot.com",
  messagingSenderId: "377871979582",
  appId: "1:377871979582:web:a4c80164ff2909f2da2d6f",
  measurementId: "G-W22P0DV8GS"
};

// Initialize Firebase
!getApps().length? initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();
const auth=getAuth();
const provider=new GoogleAuthProvider();

export default db;
export {storage,auth,provider};