// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOfmuKim-zh8p-qHKJsaxw_3WOSt8iZMs",
  authDomain: "landing-mia.firebaseapp.com",
  projectId: "landing-mia",
  storageBucket: "landing-mia.appspot.com",
  messagingSenderId: "347823581630",
  appId: "1:347823581630:web:2ec71355112915777a31ef",
  measurementId: "G-PTSXS1V2GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtener una instancia de Firestore
const db = getFirestore(app);

// Exportar la instancia de Firestore para que puedas usarla en otras partes de tu aplicación
export default db;