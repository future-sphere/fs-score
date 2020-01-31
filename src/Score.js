import React, { useState } from "react";
import * as firebase from "firebase";

function Score() {
  const uid = firebase.auth().currentUser.uid;
  const [studentName, setName] = useState("");
  // const [studentQuiz, setQuiz] = useState([]);
  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        // An error happened.
      });
  };
  firebase
    .database()
    .ref("Student/" + uid)
    .once("value")
    .then(function(snapshot) {
      setName(snapshot.val().name);
      // setQuiz(snapshot.val().quiz);
    });
  return (
    <div>
      <p>{studentName}</p>
      {/* <ul>
        {studentQuiz.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      <button type="button" onClick={handleClick}>
        登出
      </button>
    </div>
  );
}

export default Score;
