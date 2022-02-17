// import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSOZZBOI7y9tGVdWwbhmC6zKm7IHCcTwA",
  authDomain: "halifaxfoodie-b641b.firebaseapp.com",
  databaseURL: "https://halifaxfoodie-b641b-default-rtdb.firebaseio.com",
  projectId: "halifaxfoodie-b641b",
  storageBucket: "halifaxfoodie-b641b.appspot.com",
  messagingSenderId: "745236031671",
  appId: "1:745236031671:web:44b4a2536556874b7ec532"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;