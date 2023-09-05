// Header.js
// rfce
import React from "react";
import { Link } from 'react-router-dom'; //메뉴 라이브러리

function Header() {
  return (
    <div>
      {/* 부트스트랩 메뉴 추가 */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* 메뉴 제목 시작 */}
          <Link to ="/" className="navbar-brand" >
            Simple DMS
          </Link>
          {/* 메뉴 제목 끝 */}
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
          {/* 아래 : 메뉴 등록 부분 시작 */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* dept다운 메뉴 시작 */}
              <li className="nav-item dropdown">
                {/* 대메뉴 시작 */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dept
                </a>
                {/* 대메뉴 끝 */}

                {/* 소메뉴 시작 */}
                <ul className="dropdown-menu">
                  <li>
                    <Link to = "/dept" className="dropdown-item">
                      Dept
                    </Link>
                  </li>
                  <li>
                    <Link to= "/add-dept" className="dropdown-item">
                      add Dept
                    </Link>
                  </li>
                </ul>
                {/* 소메뉴 끝 */}
              </li>
              {/* dept 메뉴 끝 */}

              {/* emp 메뉴 시작 */}
              <li className="nav-item dropdown">
                {/* 대메뉴 시작 */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  emp
                </a>
                {/* 대메뉴 끝 */}

                {/* 소메뉴 시작 */}
                <ul className="dropdown-menu">
                  <li>
                    <Link to= "/emp" className="dropdown-item" >
                      emp
                    </Link>
                  </li>
                  <li>
                    <Link to = "/add-emp" className="dropdown-item">
                      add emp
                    </Link>
                  </li>
                </ul>
                {/* 소메뉴 끝 */}
              </li>
              {/* emp 메뉴 끝 */}
            </ul>
          </div>
          {/* 메뉴 등록 부분 끝 */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
