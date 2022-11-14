import { getApp, initializeApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBGm_S1y5Trbg6Ffj_XKRLN0odGVQGt_4",
  authDomain: "instagram-e0057.firebaseapp.com",
  projectId: "instagram-e0057",
  storageBucket: "instagram-e0057.appspot.com",
  messagingSenderId: "377871979582",
  appId: "1:377871979582:web:a4c80164ff2909f2da2d6f",
  measurementId: "G-W22P0DV8GS",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default db;
export { storage, auth, provider };
