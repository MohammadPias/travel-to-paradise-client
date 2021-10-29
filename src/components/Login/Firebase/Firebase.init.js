import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initializeAuthentication;