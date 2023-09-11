// Header.js // (공통 컴포넌트)
import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {

  return (
    
    <div>

      {/* 사이트 명 시작 */}
      <div id="name">
        <h1>웹사이트 명</h1>
      </div>
      {/* 사이트명 끝 */}
      {/*  윗메뉴 시작*/}
      <div className="topMenubar">
        <Link className="topMenu">로그인</Link>
        <Link className="topMenu">회원가입</Link>
      </div>
      {/* 윗메뉴 끝 */}
      {/* 네비게이션 바 시작 */}
      <div className="nav">
        <Link className="navManu">메인 메뉴 1</Link>
        <Link className="navManu">메인 메뉴 2</Link>
        <Link className="navManu">메인 메뉴 3</Link>

        <div className="searchbar">
          {/* 검색어 입력창 시작 */}
          <input type = "text"/>
          {/* 검색어 입력창 끝 */}
          <button>Search</button>
        </div>
        
        
      </div>
      {/* 네비게이션 바 긑 */}
     </div>
  );
}

export default Header;  
      
      
      



      
      
      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
   
