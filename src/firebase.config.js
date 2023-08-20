// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBrQnqUyMSSkiLzX3HOnNehc_UGPmw_z18",

  authDomain: "house-marketplace-app-d63c3.firebaseapp.com",

  projectId: "house-marketplace-app-d63c3",

  storageBucket: "house-marketplace-app-d63c3.appspot.com",

  messagingSenderId: "934073965588",

  appId: "1:934073965588:web:6cf909f7fde51e6b9bdb01"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)