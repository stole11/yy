import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbVA9JTAghCAu_YswdTY3iiVZ1mr_61-U",
    authDomain: "weekend-jobs-585f1.firebaseapp.com",
    projectId: "weekend-jobs-585f1",
    storageBucket: "weekend-jobs-585f1.appspot.com",
    messagingSenderId: "971351021472",
    appId: "1:971351021472:web:7daf8702b705dd492df6c5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const storage = getStorage(app);

  export {
    firebase,
    db, 
    storage
  };
