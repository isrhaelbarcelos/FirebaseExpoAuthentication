// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const getUsers = async() => {
  const userDocument = firestore().collection("usuarios")
  .doc("H605d5EuwgVHT0g8hfvI02AA14l1").get()
}

const firebaseConfig = {
  apiKey: "AIzaSyAlHdnlJ6ZuWF-HSDk2FOtB8d4Uov8uBuI",
  authDomain: "webbacktrash.firebaseapp.com",
  projectId: "webbacktrash",
  storageBucket: "webbacktrash.appspot.com",
  messagingSenderId: "890900383081",
  appId: "1:890900383081:web:e4914161a103ae340669f8",
  measurementId: "G-2578MKC2BE",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };