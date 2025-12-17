// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-31ddf.firebaseapp.com",
  projectId: "mern-estate-31ddf",
  storageBucket: "mern-estate-31ddf.firebasestorage.app",
  messagingSenderId: "581357258272",
  appId: "1:581357258272:web:af14b097f79c55dae41e45",
  measurementId: "G-M5ZWLEPNBP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);