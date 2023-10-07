import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
} from "firebase/firestore";
import { toast } from "react-toastify";

let userRef = collection(firestore, "users");


export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};