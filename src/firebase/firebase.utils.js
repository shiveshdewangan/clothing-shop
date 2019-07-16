import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQVf6qNJgPEZWVFPQvXU4dJa4GFwR2RZY",
  authDomain: "clothing-db-15790.firebaseapp.com",
  databaseURL: "https://clothing-db-15790.firebaseio.com",
  projectId: "clothing-db-15790",
  storageBucket: "clothing-db-15790.appspot.com",
  messagingSenderId: "115943863619",
  appId: "1:115943863619:web:71d7a0a69e7f3da7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(provider);

export default firebase;
