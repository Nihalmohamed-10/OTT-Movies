// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5nYgObECb0epA59oJ2TeAChLNziKV0Co",
  authDomain: "login-netflix-f0e07.firebaseapp.com",
  projectId: "login-netflix-f0e07",
  storageBucket: "login-netflix-f0e07.appspot.com",
  messagingSenderId: "827184849450",
  appId: "1:827184849450:web:8f186b4c243f07519d5953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;