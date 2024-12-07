// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCJnDOZRetZhIusF9s0vTQOPWKf3kAyJHA",
    authDomain: "bucket-list-48df5.firebaseapp.com",
    projectId: "bucket-list-48df5",
    storageBucket: "bucket-list-48df5.firebasestorage.app",
    messagingSenderId: "557297814422",
    appId: "1:557297814422:web:12dbc3e308ff588862abb7",
    measurementId: "G-WQ0DHDCBX3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
