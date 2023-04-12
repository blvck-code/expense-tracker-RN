// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirebase, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIEwYr0as_5Lbzll3cgfBx6SMsNoVIYEg",
  authDomain: "expensify-8b552.firebaseapp.com",
  projectId: "expensify-8b552",
  storageBucket: "expensify-8b552.appspot.com",
  messagingSenderId: "394780102030",
  appId: "1:394780102030:web:e57ad3b897b0a0526928df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirebase(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
