// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhMZTcshTyvkiURZOR-FsiVfP7u3AFhk",
  authDomain: "react-cursos-f02b3.firebaseapp.com",
  projectId: "react-cursos-f02b3",
  storageBucket: "react-cursos-f02b3.appspot.com",
  messagingSenderId: "510287550102",
  appId: "1:510287550102:web:bd2418063100907f7f94b7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )