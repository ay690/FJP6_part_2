// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCcNFydwvr9f2M10btON3rwndcDaLNC7BI",
  authDomain: "class-demo-e40b9.firebaseapp.com",
  projectId: "class-demo-e40b9",
  storageBucket: "class-demo-e40b9.appspot.com",
  messagingSenderId: "554497370968",
  appId: "1:554497370968:web:199a1361829a41647f132d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);