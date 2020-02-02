import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import Score from "./Score";
import Admin from "./Admin";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8usw9WylygnhlFSi4ANiWCa6n7ouFi7w",
  authDomain: "futuresphere-student-score.firebaseapp.com",
  databaseURL: "https://futuresphere-student-score.firebaseio.com",
  projectId: "futuresphere-student-score",
  storageBucket: "futuresphere-student-score.appspot.com",
  messagingSenderId: "995120899595",
  appId: "1:995120899595:web:e64c3519552119b581c90e",
  measurementId: "G-R0C5WMKJ5E"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("Student/" + uid)
      .once("value")
      .then(function(snapshot) {
        if (snapshot.val().class == "管理员") {
          ReactDOM.render(<Admin />, document.getElementById("root"));
        } else {
          ReactDOM.render(<Score />, document.getElementById("root"));
        }
      });
  } else {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
