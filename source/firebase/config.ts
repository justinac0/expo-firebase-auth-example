import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase_config.json"

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
