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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;