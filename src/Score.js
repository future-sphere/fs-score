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
  const [studentDrop, setDrop] = useState(false);
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
        setDrop(snapshot.val().isDrop)
      });
  }, []);

  return (
    <div>
      <div className="alert">
      受疫情(COVID-19)影响，为了大家的健康和安全考虑，2020年3月21日起所有课程改为网课，直到疫情结束再另行通知
      </div>
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
        
      </div><div className="studentFunctions">
          <button class="signOutBtn" type="button" onClick={signOut}>
            登出
          </button>
          <button class="signOutBtn" type="button" onClick={changePassword}>
            更改密码
          </button>
          {studentDrop?(<div className="dropState dropTrue" title="您已不在就业保证计划内"><i class="fas fa-times"></i>就业保证计划</div>):(<div className="dropState dropFalse"title="您在就业保证计划内"><i class="fas fa-check"></i>就业保证计划</div>)}
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
      {studentDrop ?(<div></div>): (<div><p class="infoTitle">资料:</p>
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
      <p class="infoTitle">视频:</p>
      <div class="infoBlocks">
        <a
          class="infoBlock"
          href="https://vimeo.com/395087772/f1d0a55a2d"
          target="_blank"
        >
          <i class="fas fa-video"></i>通过React使用HTTP数据 05-A
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395086605/aadda1c8d3"
          target="_blank"
        >
          <i class="fas fa-video"></i>通过React使用HTTP数据 05-B
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395086460/89aa6141e5"
          target="_blank"
        >
          <i class="fas fa-video"></i>如何给页面增加覆盖层 06-A
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395086373/95bd2a6e65"
          target="_blank"
        >
          <i class="fas fa-video"></i>如何给页面增加覆盖层 06-B
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395091203/ad41073f71"
          target="_blank"
        >
          <i class="fas fa-video"></i>React Hooks 07
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395104039/b5642fc336"
          target="_blank"
        >
          <i class="fas fa-video"></i>React Router 08-A
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/395104753/1558f575d1"
          target="_blank"
        >
          <i class="fas fa-video"></i>React Router 08-B
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399043223/bd68e1dd83"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-01-router-A
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399043634/fd7b6320bb"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-01-router-B
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399043683/58a8343ee7"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-01-router-C
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399043952/d161402093"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-02-register-form-A
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399045634/7455a9a126"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-02-register-form-B
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399048227/af6362870f"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-02-register-form-C
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399048177/dfe76e6acb"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-02-register-form-D
        </a>
        <a
          class="infoBlock"
          href="https://vimeo.com/399047360/529dc49503"
          target="_blank"
        >
          <i class="fas fa-video"></i>social-02-register-form-E
        </a>
      </div></div>)}
      
    </div>
  );
}

export default Score;
