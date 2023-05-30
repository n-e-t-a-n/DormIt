import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9A3bcS7EcAYUggeew1YvNk-wCNnu5A3I",
  authDomain: "dormit-a2649.firebaseapp.com",
  projectId: "dormit-a2649",
  storageBucket: "dormit-a2649.appspot.com",
  messagingSenderId: "823056166239",
  appId: "1:823056166239:web:cb193e32e0901eeed3daea",
  measurementId: "G-W15NPVRFCV"
};

const startFirebaseAppIfExists = (config = {}) => {
  try {
    return getApp();
  } catch (error) {
    return initializeApp(config);
  }
};

export const app = startFirebaseAppIfExists(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);