// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKqbOxa1bORYjup5AyzHVK16CMb8cm5aQ",
    authDomain: "galaxify-355c4.firebaseapp.com",
    projectId: "galaxify-355c4",
    storageBucket: "galaxify-355c4.appspot.com",
    messagingSenderId: "395368625761",
    appId: "1:395368625761:web:af8e38f2ed31823cff1c20",
    measurementId: "G-Y2ZNLD4DN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };