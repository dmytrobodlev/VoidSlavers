import * as R from "ramda";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBBMN1oAjPP_9B82wizPHmlDaDWAFpA2lA",
  authDomain: "void-slavers.firebaseapp.com",
  databaseURL: "https://void-slavers.firebaseio.com",
  projectId: "void-slavers",
  storageBucket: "void-slavers.appspot.com",
  messagingSenderId: "412773290817",
  appId: "1:412773290817:web:3d24c7afdf2be1dd9a47c0",
  measurementId: "G-9KJBYGFC9K"
};

firebase.initializeApp(config);

export const emailProvider = new firebase.auth.EmailAuthProvider();
export const phoneProvider = new firebase.auth.PhoneAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const storage = R.is(Function, firebase.storage) && firebase.storage();

if (process.env.NODE_ENV === "development") {
  window.firebaseAuth = firebase.auth;
  window.firebaseEmailProvider = emailProvider;
  window.firebasePhoneProvider = phoneProvider;
}

export default firebase;
