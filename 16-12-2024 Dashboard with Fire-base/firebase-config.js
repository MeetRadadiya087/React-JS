import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDR1lNmXbsiRfJqKyoJXY4eajjhAHtFIx4",
  authDomain: "dashboard-with-fire-base.firebaseapp.com",
  projectId: "dashboard-with-fire-base",
  storageBucket: "dashboard-with-fire-base.firebasestorage.app",
  messagingSenderId: "313822767756",
  appId: "1:313822767756:web:bca053bef42fb72f68e9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
