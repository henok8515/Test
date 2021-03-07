import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyA6vInT2lewI_-2SLkci7HrmgHgD75vtpw",
  authDomain: "crown-cloth-7d517.firebaseapp.com",
  projectId: "crown-cloth-7d517",
  storageBucket: "crown-cloth-7d517.appspot.com",
  messagingSenderId: "454160626386",
  appId: "1:454160626386:web:3f238e2b47570a837eb30b",
  measurementId: "G-HF7VTJW348",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select account" });
export const signinWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
