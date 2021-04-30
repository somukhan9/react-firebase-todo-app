import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDoyguYX8yBAagba1_CykrB8_290b9cOds",
  authDomain: "todo-82ef0.firebaseapp.com",
  projectId: "todo-82ef0",
  storageBucket: "todo-82ef0.appspot.com",
  messagingSenderId: "67939580588",
  appId: "1:67939580588:web:94268bcfd39a9ea99e3d09",
  measurementId: "G-8XQNF42780",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider, db };
