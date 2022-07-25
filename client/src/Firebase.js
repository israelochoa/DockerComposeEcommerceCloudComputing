
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDylT749ZB1doAIStharwz-sRXSCyVBWEQ",
    authDomain: "clone-5f9ff.firebaseapp.com",
    projectId: "clone-5f9ff",
    storageBucket: "clone-5f9ff.appspot.com",
    messagingSenderId: "442299397368",
    appId: "1:442299397368:web:10adaec11bcbc903f9b70d",
    measurementId: "G-XB4CLLMBHG"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app,analytics,auth,signInWithEmailAndPassword , createUserWithEmailAndPassword};