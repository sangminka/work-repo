import React from "react";
import { Link } from "react-router-dom";
// import { a } from "react-router-dom";


function HeaderCom() {
  
  return (
    <div>
      {" "}
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href ="/">Mentor</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="/.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="courses">Courses</a>
              </li>
              <li>
                <a href="trainers">Trainers</a>
              </li>
              <li>
                <a href="events">Events</a>
              </li>
              <li>
                <a href="pricing">Pricing</a>
              </li>
              {/* customer 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>고객</span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 1 */}
                  <li>
                    <a href="/customer">고객 조회</a>
                  </li>
                  {/* 중메뉴 2 */}
                  <li>
                    <a href="/add-customer">고객 추가</a>
                  </li>

                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* customer 메뉴 끝 */}

              {/* customer 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>Q & A</span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 1 */}
                  <li>
                    <a href="/qna">Q & A 조회</a>
                  </li>
                  {/* 중메뉴 2 */}
                  <li>
                    <a href="/add-qna">Q & A 추가</a>
                  </li>

                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* customer 메뉴 끝 */}


              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* .navbar */}

          <a href="courses" className="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}

export default HeaderCom;
