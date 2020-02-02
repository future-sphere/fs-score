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
          alert("Wrong password.");
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
