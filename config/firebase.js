import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyC9A3bcS7EcAYUggeew1YvNk-wCNnu5A3I",
  authDomain: "dormit-a2649.firebaseapp.com",
  projectId: "dormit-a2649",
  storageBucket: "dormit-a2649.appspot.com",
  messagingSenderId: "823056166239",
  appId: "1:823056166239:web:cb193e32e0901eeed3daea",
  measurementId: "G-W15NPVRFCV"
};

const app = startFirebaseAppIfExists(firebaseConfig);

function startFirebaseAppIfExists(config = {}) {
  try {
    return getApp();
  } catch (error) {
    return initializeApp(config);
  }
}

// Initialize Firebase
if (!firebase.apps.length) {
  initializeApp(firebaseConfig, 'DormIt'); // Add your app name as the second parameter
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { firebaseConfig };
export default app;