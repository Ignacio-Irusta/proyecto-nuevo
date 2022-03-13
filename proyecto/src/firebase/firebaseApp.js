// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebase } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Bi1yzB2-nyG1kbaXmZF977lkTCJgl9c",
  authDomain: "appcoderhouse.firebaseapp.com",
  projectId: "appcoderhouse",
  storageBucket: "appcoderhouse.appspot.com",
  messagingSenderId: "301405318685",
  appId: "1:301405318685:web:8edd8a949c400b796120f4",
  measurementId: "G-319HJWBZXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getFirebase = () =>{
    return app;
}

export const getFirestore = () =>{
    return firebaseConfig.getFirestore(app);
}