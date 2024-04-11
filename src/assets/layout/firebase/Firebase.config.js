// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPA4RLYfw5qdrXebK2aMIpTDcQt-7IwVQ",
    authDomain: "dreems-home.firebaseapp.com",
    projectId: "dreems-home",
    storageBucket: "dreems-home.appspot.com",
    messagingSenderId: "143229009364",
    appId: "1:143229009364:web:0ff2adb82f5dc1df3e2a41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);