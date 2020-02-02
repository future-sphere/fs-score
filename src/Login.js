import React, { useState } from "react";
import "./Login.css";
import * as firebase from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("密码错误");
        } else if (
          errorMessage ==
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert("电子邮箱不正确或未注册");
        } else if (errorMessage == "The email address is badly formatted.") {
          alert("未输入电子邮箱或格式不正确");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  };
  return (
    <form class="loginBox" autocomplete="off">
      <p class="loginTitle">学生中心 | 登陆</p>
      <input
        autoFocus
        autocomplete="off"
        placeholder="电子邮箱"
        class="loginEmail"
        type="email"
        id="txtEmail"
        onChange={event => setEmail(event.target.value)}
        required
      ></input>
      <input
        autocomplete="off"
        placeholder="密码"
        class="loginPassword"
        type="password"
        id="txtPassword"
        onChange={event => setPassword(event.target.value)}
        required
      ></input>
      <button class="loginButton" type="button" onClick={handleClick}>
        登录
      </button>
    </form>
  );
}

export default Login;
