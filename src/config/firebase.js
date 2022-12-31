// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhZscMKMoWluRCD49JwI9WhKtzlBGGtiM",
    authDomain: "react-hook-form-8b9d5.firebaseapp.com",
    projectId: "react-hook-form-8b9d5",
    storageBucket: "react-hook-form-8b9d5.appspot.com",
    messagingSenderId: "771061817247",
    appId: "1:771061817247:web:2b1bf5cc0f611440c7e7aa",
    measurementId: "G-E3SQJFFQH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
