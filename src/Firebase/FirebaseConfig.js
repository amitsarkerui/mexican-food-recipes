// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XbC82B3fXu9iOd9Qlw5wkhxhqfFnnz0",
  authDomain: "mexican-food-client.firebaseapp.com",
  projectId: "mexican-food-client",
  storageBucket: "mexican-food-client.appspot.com",
  messagingSenderId: "470230142474",
  appId: "1:470230142474:web:b6d508983da93575b4d9f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
