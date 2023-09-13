import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <form method="post" action="서버의url" id="login-form">
        <input type="text" name="userName" placeholder="email" />
        <input type="password" name="userPassword" placeholder="password" />
        <label for="remember-check" id="RemamberId">
          <input type="checkbox" id="remamber-check" />
           아이디 저장
        </label>

        <input type="submit" value="Login" />
        <div className="FindIdPs">
          <Link to="/Findps" className="findLink">
            아이디 찾기
          </Link>
          <Link to="/Findid" className="findLink">
            비밀번호 찾기
          </Link>
          <Link to="/signup" className="findLink">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
