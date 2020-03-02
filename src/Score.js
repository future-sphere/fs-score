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
  const changePassword = () => {
    const pw1 = window.prompt("请输入新密码");
    const pw2 = window.prompt("请再次输入新密码");
    const user = firebase.auth().currentUser;
    if (pw1 === pw2) {
      user
        .updatePassword(pw1)
        .then(function() {
          alert("密码修改成功！");
        })
        .catch(function(error) {
          alert("密码修改失败！");
        });
    } else {
      alert("两次输入的密码不一致");
    }
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
        <button class="signOutBtn" type="button" onClick={changePassword}>
          更改密码
        </button>
      </div>
      <p class="infoTitle">成绩:</p>
      <div class="studentInfo">
        <ol>
          <p class="subTitle">测验</p>
          {studentQuiz === undefined ? (
            <p>暂无成绩</p>
          ) : (
            studentQuiz.map((item, index) => (
              <li key={item}>
                <p class="listCounter">测验 {index + 1}</p>
                <div class="number">{item} %</div>
              </li>
            ))
          )}
        </ol>
        <ol>
          <p class="subTitle">考试:</p>
          {studentExam === undefined ? (
            <p>暂无成绩</p>
          ) : (
            studentExam.map((item, index) => (
              <li key={item}>
                <p class="listCounter">月考 {index + 1}</p>
                <div class="number">{item} %</div>
              </li>
            ))
          )}
        </ol>
        <ol>
          <p class="subTitle">作业:</p>
          {studentHW === undefined ? (
            <p>暂无成绩</p>
          ) : (
            studentHW.map((item, index) => (
              <li key={item}>
                <p class="listCounter">第 {index + 1} 周</p>
                <div class="number">{item} %</div>
              </li>
            ))
          )}
        </ol>
      </div>
      <p class="infoTitle">资料:</p>
      <div class="infoBlocks">
        <a class="infoBlock" href="/files/Contract.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i>就业保证计划合同
        </a>
        <a class="infoBlock" href="/files/设备推荐.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> 上课设备推荐
        </a>
        <a class="infoBlock" href="/files/课程安排.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> 上课时间安排
        </a>
        <a class="infoBlock" href="/files/SE100.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> SE100 课程大纲
        </a>
        <a class="infoBlock" href="/files/SE200.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> SE200 课程大纲
        </a>
        <a class="infoBlock" href="/files/SE300.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> SE300 课程大纲
        </a>
        <a class="infoBlock" href="/files/SE400.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> SE400 课程大纲
        </a>
      </div>
    </div>
  );
}

export default Score;
