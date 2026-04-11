import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQJOhmfz9YYnxTxa_5i3kpNQ_OWUuTZvI",
  authDomain: "dilabet-2c954.firebaseapp.com",
  projectId: "dilabet-2c954",
  storageBucket: "dilabet-2c954.firebasestorage.app",
  messagingSenderId: "1018613071138",
  appId: "1:1018613071138:web:222428bc4c6a4e56e2397b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
