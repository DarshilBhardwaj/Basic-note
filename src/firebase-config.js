import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCPRP05y29wPtu2ge5TjPMvEW_AsU3dvug",
    authDomain: "todo-app-bee47.firebaseapp.com",
    projectId: "todo-app-bee47",
    storageBucket: "todo-app-bee47.appspot.com",
    messagingSenderId: "429924054145",
    appId: "1:429924054145:web:6f7c2e2ac4c3be7ab3c980",
    measurementId: "G-1FEM68SH4N"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export {db};