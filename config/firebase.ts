// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";






const firebaseConfig = {
  apiKey: "AIzaSyCLdAiC1ZsUdNIG8gMV0ICnOzpbcnyt6WQ",
  authDomain: "sesa-f250c.firebaseapp.com",
  projectId: "sesa-f250c",
  storageBucket: "sesa-f250c.appspot.com",
  messagingSenderId: "317220869899",
  appId: "1:317220869899:web:28d7e56b1d42ec827ab40e",
  measurementId: "G-LQKHNJE5RL"
};



const app = initializeApp(firebaseConfig);

export const firebaseApp= app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const initFirebase = () => {
  return app;
};