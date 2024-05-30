import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMdtI0DWhvRekPImu-nNyRTLkjeeNl2jg",
  authDomain: "child-hopes-charity.firebaseapp.com",
  projectId: "child-hopes-charity",
  storageBucket: "child-hopes-charity.appspot.com",
  messagingSenderId: "814750978035",
  appId: "1:814750978035:web:f00327735b7a3b97124c86",
  measurementId: "G-0GX2D2G6PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);