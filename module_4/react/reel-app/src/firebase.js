// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import secret from "./secrets"
import { getStorage } from "firebase/storage";



// Initialize Firebase
const app = initializeApp(secret);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);