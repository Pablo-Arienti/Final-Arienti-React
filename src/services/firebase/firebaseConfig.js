// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNI5rj2qyIe3wSfmELQWf3ElC2Vs8F_4",
  authDomain: "hard-war-96f40.firebaseapp.com",
  projectId: "hard-war-96f40",
  storageBucket: "hard-war-96f40.appspot.com",
  messagingSenderId: "517175228619",
  appId: "1:517175228619:web:1e3d8b66f937497c60434e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)