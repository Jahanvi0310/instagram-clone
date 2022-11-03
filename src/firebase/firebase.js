import { getApp, initializeApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBIsKZ4gZgNIV_RcTaaeUxUS3NhSOTZRFo",
  authDomain: "crud-story-4eb3a.firebaseapp.com",
  projectId: "crud-story-4eb3a",
  storageBucket: "crud-story-4eb3a.appspot.com",
  messagingSenderId: "2782281551",
  appId: "1:2782281551:web:f87893db1ef6a3b46c8f3a"
};

!getApps().length ? initializeApp(firebaseConfig):getApp();
const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);
const storage=getStorage(app);
const auth=getAuth();
const provider=new GoogleAuthProvider();
export {storage,auth,provider};