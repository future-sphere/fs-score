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
        setClass(snapshot.val().class);
        setQuiz(snapshot.val().quiz);
        setExam(snapshot.val().exam);
        setHW(snapshot.val().homework);
      });
  }, []);

  return (
    <div>
      <div class="links">
        <div>
          <img
            class="logo"
            src="https://res.cloudinary.com/dtgh01qqo/image/upload/v1578112543/FutureSphere/logo%E9%95%BF%E6%96%B9%E5%BD%A2%E9%80%8F%E6%98%8E%E8%83%8C%E6%99%AF.png"
            alt="logo"
          ></img>
        </div>
        <div>
          <a
            class="linkHomework"
            target="_block"
            href="https://homework.thefuturesphere.com/"
          >
            作业网
          </a>
        </div>
      </div>
      <div class="header">
        <p class="scoreTitle">
          {studentClass} | <p class="studentName">{studentName}</p>
        </p>
        <button class="signOutBtn" type="button" onClick={signOut}>
          登出
        </button>
      </div>

      <div class="info">
        <ol>
          <p class="subTitle">测验</p>
          {studentQuiz.map((item, index) => (
            <li key={item}>
              <p class="listCounter">第 {index + 1} 次</p>
              <div class="number">{item}%</div>
            </li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">考试</p>
          {studentExam.map((item, index) => (
            <li key={item}>
              <p class="listCounter">第 {index + 1} 个月</p>
              <div class="number">{item}%</div>
            </li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">作业</p>
          {studentHW.map((item, index) => (
            <li key={item}>
              <p class="listCounter">第 {index + 1} 周</p>
              <div class="number">{item}%</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Score;
