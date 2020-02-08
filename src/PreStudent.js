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
      <div class="header">
        <p class="scoreTitle">
          {studentClass} | <p class="studentName">{studentName}</p>
        </p>
        <button class="signOutBtn" type="button" onClick={signOut}>
          登出
        </button>
      </div>
      <div class="info">
        <p class="title">资料：</p>
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/1isqUoKofWTI_lelEK0sGHRBD7xKXtX5-JdEflC3N4mw/edit#"
              target="_blank"
            >
              软件工程师旗舰课课前准备
            </a>
          </li>
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
        </ul>
      </div>
    </div>
  );
}

export default PreStudent;
