// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBujZ6xkLinGolSO7Nu05_3-ZXrSDQ_CLs",
    authDomain: "real-estate-a9-d6b36.firebaseapp.com",
    projectId: "real-estate-a9-d6b36",
    storageBucket: "real-estate-a9-d6b36.appspot.com",
    messagingSenderId: "212067622170",
    appId: "1:212067622170:web:9980af2450c1ff7fc760a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;