// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_API_KEY
  
  authDomain: "ai-yt-generator.firebaseapp.com",
  projectId: "ai-yt-generator",
  storageBucket: "ai-yt-generator.firebasestorage.app",
  messagingSenderId: "34074687461",
  appId: "1:34074687461:web:5738d7f1960cdac568610c",
  measurementId: "G-D0Y6TF0ZKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);