// Header.js // (공통 컴포넌트)
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div id="header">
        <div id="name">
          <h1>웹사이트 명</h1>
        </div>
        <div className="topMenubar">
          <Link to = '/signup'className="topMenu">회원가입</Link>
          <Link to= '/login' className="topMenu">로그인</Link>
        </div>
      </div>

      {/* float 제거용 div */}
      <div className="clearfix"></div>

      <div id="nav">
        <ul className="menu">
          <li className="navManu">
            <Link to= '/' className="link">자유 게시판</Link>
          </li>
          <li className="navManu">
            <Link className="link">메인 메뉴 2</Link>
          </li>
          <li className="navManu">
            <Link className="link">메인 메뉴 3</Link>
          </li>
        </ul>

        <div className="search">
          {/* 검색어 입력창 시작 */}
          <input type="text" />
          {/* 검색어 입력창 끝 */}
          <button>Search</button>
        </div>

      </div>

      {/* float 제거용 div */}
      <div className="clearfix"></div>
    </div>
  );
}

export default Header;

