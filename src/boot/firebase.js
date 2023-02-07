import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgpVWC_9PgKLPVlpiYxOgj9B1uQtAy71E",
  authDomain: "quitter-3049d.firebaseapp.com",
  projectId: "quitter-3049d",
  storageBucket: "quitter-3049d.appspot.com",
  messagingSenderId: "834557966778",
  appId: "1:834557966778:web:be2c11b11c7a10cf3b0583"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// access firebase database with db variable
const db = firebase.firestore()
export default db
