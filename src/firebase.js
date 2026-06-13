import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDueOiTvK4t4PQUnsQ3qZe2-LanYXD-Sw",
  authDomain: "civicpulse-1764b.firebaseapp.com",
  projectId: "civicpulse-1764b",
  storageBucket: "civicpulse-1764b.firebasestorage.app",
  messagingSenderId: "96133373924",
  appId: "1:96133373924:web:08f3ae93a491c11802b1f1"
};
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = getAuth(app);