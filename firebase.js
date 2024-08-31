// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbFCKAyjQ3Apor2hZMWAqIWljIKaqZgtc",
  authDomain: "booking-proj-9ee23.firebaseapp.com",
  projectId: "booking-proj-9ee23",
  storageBucket: "booking-proj-9ee23.appspot.com",
  messagingSenderId: "384719833739",
  appId: "1:384719833739:web:9ecce8819e4757d31f628e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
