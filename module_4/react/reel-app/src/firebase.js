// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import secret from "./secrets"



// Initialize Firebase
const app = initializeApp(secret);
export let auth = getAuth(app);
export const db = getFirestore(app);