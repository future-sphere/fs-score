/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import "./PreStudent.css";

function PreStudent() {
  const uid = firebase.auth().currentUser.uid;
  const [studentName, setName] = useState("");
  const [studentClass, setClass] = useState("");
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
        setClass(snapshot.val().class);
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
      </div>
      <div class="header">
        <p class="scoreTitle">
          {studentClass} | <p class="studentName">{studentName}</p>
        </p>
        <button class="signOutBtn" type="button" onClick={signOut}>
          登出
        </button>
      </div>
      <div class="infoBlocks">
        <p class="title">资料：</p>
        <a class="infoBlock" href="/files/Contract.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i>就业保证计划合同
        </a>
        <a class="infoBlock" href="/files/设备推荐.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> 上课设备推荐
        </a>
        <a class="infoBlock" href="/files/课程安排.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> 上课时间安排
        </a>
        <a class="infoBlock" href="/files/课程安排.pdf" target="_blank">
          <i class="fas fa-file-pdf"></i> 上课时间安排
        </a>
      </div>
    </div>
  );
}

export default PreStudent;
