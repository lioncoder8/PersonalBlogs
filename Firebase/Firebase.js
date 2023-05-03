// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGu5uEjUEi7Hxof4xX-LsNqlf2kBUl5fE",
    authDomain: "personalblogs-5a82d.firebaseapp.com",
    projectId: "personalblogs-5a82d",
    storageBucket: "personalblogs-5a82d.appspot.com",
    messagingSenderId: "30419754415",
    appId: "1:30419754415:web:b8c6140362530fe4ad235a",
    measurementId: "G-NE8RW5MC2M"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
