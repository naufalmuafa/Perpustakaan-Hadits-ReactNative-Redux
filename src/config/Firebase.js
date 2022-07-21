// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/firebase-auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUABBwqE5Gi8rHkmHFXYlkBqlBw7xYp44",
  authDomain: "login-perpustakaan-hadits.firebaseapp.com",
  projectId: "login-perpustakaan-hadits",
  storageBucket: "login-perpustakaan-hadits.appspot.com",
  messagingSenderId: "1020244611722",
  appId: "1:1020244611722:web:c888aa1e4f5c9b62a71373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

