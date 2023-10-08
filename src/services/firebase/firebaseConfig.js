
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5eNfsARFeaJx0hKvUVO2wemPHK95rZlY",
  authDomain: "h4rd-ware.firebaseapp.com",
  projectId: "h4rd-ware",
  storageBucket: "h4rd-ware.appspot.com",
  messagingSenderId: "364032488811",
  appId: "1:364032488811:web:4eedc375382892d8ec082e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)