// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";
import {getFirestore} from './firebase/firestore';
import {getAuth,googleAuthProvider} from './firebase/auth';
import {getStorage} from './firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATKhF3PhSH9lknBUbDHU2rGoJpkb4tUrE",
  authDomain: "instagram-redux-b4fa0.firebaseapp.com",
  projectId: "instagram-redux-b4fa0",
  storageBucket: "instagram-redux-b4fa0.appspot.com",
  messagingSenderId: "94190654596",
  appId: "1:94190654596:web:5b4258175a3ab24d9f5ed1",
  measurementId: "G-V8G48V0HK7"
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();
const auth=getAuth();
const provider=new googleAuthProvider();
export default db;
export {storage,auth,provider};