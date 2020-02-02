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
          <p class="subTitle">测验</p>
          {studentQuiz.map((item, index) => (
          <li key={item}><p class="listCounter">{index+1}</p><div class="number">{item}</div></li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">考试</p>
          {studentExam.map((item, index) => (
            <li key={item}><p class="listCounter">{index+1}</p><div class="number">{item}</div></li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">作业</p>
          {studentHW.map((item, index) => (
            <li key={item}><p class="listCounter">{index+1}</p><div class="number">{item}</div></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Score;
