import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvqIx_JleeokXtsGYs8phn9SvfnxNIXYU",
    authDomain: "college-bf2f7.firebaseapp.com",
    databaseURL: "https://college-bf2f7-default-rtdb.firebaseio.com",
    projectId: "college-bf2f7",
    storageBucket: "college-bf2f7.appspot.com",
    messagingSenderId: "600488811367",
    appId: "1:600488811367:web:bd1e645ec1a33809ee6dc2"
});

var db = firebaseApp.firestore();

export default db ;
