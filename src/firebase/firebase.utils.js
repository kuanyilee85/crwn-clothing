import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAVzNDS3FjmHHrq4UPtA5uCjfi1J91Bojw",
  authDomain: "crwn-db-8f1d3.firebaseapp.com",
  databaseURL: "https://crwn-db-8f1d3.firebaseio.com",
  projectId: "crwn-db-8f1d3",
  storageBucket: "",
  messagingSenderId: "721524744487",
  appId: "1:721524744487:web:565ad0d3a5ad2a11a28902"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
