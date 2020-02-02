/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

function Admin() {
  const uid = firebase.auth().currentUser.uid;
  const [studentName, setName] = useState("");
  // const [students, setStudents] = useState({});
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        // An error happened.
      });
  };
  useEffect(() => {
    firebase
      .database()
      .ref("Student/" + uid)
      .once("value")
      .then(function(snapshot) {
        setName(snapshot.val().name);
      });
  }, []);
  return (
    <div>
      {studentName}
      <button class="signOutBtn" type="button" onClick={signOut}>
        登出
      </button>
    </div>
  );
}

export default Admin;
