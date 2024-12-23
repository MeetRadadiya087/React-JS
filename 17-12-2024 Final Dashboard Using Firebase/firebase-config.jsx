// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHNv2JCRV2Db8IF9KMpXP3RjMen11g0i0",
  authDomain: "final-dashboard-589e1.firebaseapp.com",
  projectId: "final-dashboard-589e1",
  storageBucket: "final-dashboard-589e1.firebasestorage.app",
  messagingSenderId: "608098327100",
  appId: "1:608098327100:web:4a7ba81189ee6f75674139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }