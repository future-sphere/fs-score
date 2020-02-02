/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import "./Score.css";

function Score() {
  const uid = firebase.auth().currentUser.uid;
  const [studentName, setName] = useState("");
  const [studentClass, setClass] = useState("");
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
  useEffect(() => {
    firebase
      .database()
      .ref("Student/" + uid)
      .once("value")
      .then(function(snapshot) {
        setName(snapshot.val().name);
        setClass(snapshot.val().class);
        setQuiz(snapshot.val().quiz);
        setExam(snapshot.val().exam);
        setHW(snapshot.val().homework);
      });
  }, []);

  return (
    <div>
      <div class="header">
        <p class="scoreTitle">
          {studentClass} | <p class="studentName">{studentName}</p>
        </p>
        <button class="signOutBtn" type="button" onClick={handleClick}>
          登出
        </button>
      </div>
      <div class="info">
        <ol>
          <p class="subTitle">Quiz</p>
          {studentQuiz.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">Exam</p>
          {studentExam.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">Homework</p>
          {studentHW.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Score;
