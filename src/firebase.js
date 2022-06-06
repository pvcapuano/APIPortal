// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOn6fqUbH0cS9mMoFYUxJ_puIJLd3Ggk4",
  authDomain: "twitter-clone-1076f.firebaseapp.com",
  projectId: "twitter-clone-1076f",
  storageBucket: "twitter-clone-1076f.appspot.com",
  messagingSenderId: "315032059055",
  appId: "1:315032059055:web:09978816b0a9e7a7b6685a",
  measurementId: "G-HB3Y0D78QM",
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
