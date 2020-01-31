import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

function Score() {
  const uid = firebase.auth().currentUser.uid;
  const [studentName, setName] = useState("");
  const [studentQuiz, setQuiz] = useState([]);
  const [studentExam, setExam] = useState([]);
  const [studentHW, setHW] = useState([]);
  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        // An error happened.
      });
  };
  useEffect(()=>{
     firebase
    .database()
    .ref("Student/" + uid)
    .once("value")
    .then(function(snapshot) {
      setName(snapshot.val().name);
      setQuiz(snapshot.val().quiz);
      setExam(snapshot.val().exam);
      setHW(snapshot.val().homework);
    });
  })
 
  return (
    <div>
      <p>{studentName}</p>
      <ul>
        Quiz:
        {studentQuiz.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        Exam:
        {studentExam.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        Homework:
        {studentHW.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        登出
      </button>
    </div>
  );
}

export default Score;
