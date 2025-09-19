// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnGCShR-SO2bzDGmFSMuBRNM5gJ9-V_Xg",
  authDomain: "email-auth-a95f9.firebaseapp.com",
  projectId: "email-auth-a95f9",
  storageBucket: "email-auth-a95f9.firebasestorage.app",
  messagingSenderId: "323908739794",
  appId: "1:323908739794:web:5ca9e263ccced84363030b",
  measurementId: "G-C26CD1L8FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)