// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsvbZcm2FyvJ2encR4ufpzH2Fc5CeBdFw",
  authDomain: "panelavelha-ad1fe.firebaseapp.com",
  projectId: "panelavelha-ad1fe",
  storageBucket: "panelavelha-ad1fe.appspot.com",
  messagingSenderId: "689041865448",
  appId: "1:689041865448:web:c7fb158ea55ae749c5a75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);