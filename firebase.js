import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsg6gQZB3jk3YUzRWTvzeqKq1mwNGSaGY",
  authDomain: "chatapp-56580.firebaseapp.com",
  projectId: "chatapp-56580",
  storageBucket: "chatapp-56580.appspot.com",
  messagingSenderId: "768331374388",
  appId: "1:768331374388:web:23e8d2b48734777fa24f61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
