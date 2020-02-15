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
        <p class="studentTitle">
          {studentClass} | <p class="studentName">{studentName}</p>
        </p>
        <button class="signOutBtn" type="button" onClick={signOut}>
          登出
        </button>
      </div>
      <p class="scoreTitle">成绩:</p>
      <div class="studentInfo">
        <ol>
          <p class="subTitle">测验</p>
          {studentQuiz.map((item, index) => (
            <li key={item}>
              <p class="listCounter">测验 {index + 1}</p>
              <div class="number">{item} %</div>
            </li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">考试</p>
          {studentExam.map((item, index) => (
            <li key={item}>
              <p class="listCounter">月考 {index + 1}</p>
              <div class="number">{item} %</div>
            </li>
          ))}
        </ol>
        <ol>
          <p class="subTitle">作业</p>
          {studentHW.map((item, index) => (
            <li key={item} id="score">
              <p class="listCounter">第 {index + 1} 周</p>
              <div class="number">{item} %</div>
            </li>
          ))}
        </ol>
      </div>
      <p class="infoTitle">资料:</p>
      <div>
      <ul class="studentInfoList">
          <li>
            <a
              href="https://docs.google.com/document/d/19f-wQ5hChGWb5ukFgprDJ5pF3dbpb2TT5bm8Y8qcWwo/edit"
              target="_blank"
            >
              就业保证计划合同
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1tFr5YcRMMfyxgzJv6wp2FLOiDmy4HO061Og9cDWVdek/edit"
              target="_blank"
            >
              上课设备推荐
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1qHvSKCpCPGxUNdCbTHoeuwQPEq9WZRay6B9Wyu7qVrI/edit?usp=sharing"
              target="_blank"
            >
              上课时间安排
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1eDgvOFgDxIwo-wdJXXyv5XTXwH_OIFADYAQ6hElgZ_8/edit"
              target="_blank"
            >
              SE100 课程大纲
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1Bxphh1CACN_l8yMi8xw7d_a8SPKao7aoTIF-BmVsljE/edit"
              target="_blank"
            >
              SE200 课程大纲
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/15KZdBsbGDh9nfNKin4N5CWAK0jIkZaWNMJpqBQFmFL8/edit"
              target="_blank"
            >
              SE300 课程大纲
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1xqHwtEz1jVSi6mgUQS41aX95re4SNkJPsfmKkmQXXdQ/edit"
              target="_blank"
            >
              SE400 课程大纲
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Score;
