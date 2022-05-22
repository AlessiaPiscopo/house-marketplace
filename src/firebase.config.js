// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwcTkfewHYJxtnq5ADJLihRGXkB5_I9QI",
  authDomain: "dwell-bacf3.firebaseapp.com",
  projectId: "dwell-bacf3",
  storageBucket: "dwell-bacf3.appspot.com",
  messagingSenderId: "957678842489",
  appId: "1:957678842489:web:681d7a35f39e7bedb15aa8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
