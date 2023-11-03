// components/common/Nav.tsx : rfce
import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/style.css";

function Nav() {
  return (
    <>
      {/* <!-- 머리말 시작 --> */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      {/* <!-- 머리말 끝 --> */}

      {/* <!-- 메뉴 시작 --> */}
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link to="/" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>
            {/* 메뉴들 시작 */}
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              {/*  home 메뉴시작 */}
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              {/* home 메뉴 끝 */}

              {/* 드롭다운 메뉴 시작 */}
              <li className="has-children">
                <Link to="#">Dropdown</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="elements">Elements</Link>
                  </li>
                  <li>
                    <Link to="#">Menu One</Link>
                  </li>
                  <li className="has-children">
                    <Link to="#">Menu Two</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Sub Menu One</Link>
                      </li>
                      <li>
                        <Link to="#">Sub Menu Two</Link>
                      </li>
                      <li>
                        <Link to="#">Sub Menu Three</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Menu Three</Link>
                  </li>
                </ul>
              </li>
              {/* 드롭다운 메뉴 끝 */}

              {/* 고객 시작 */}
              <li className="has-children">
                <Link to="#">고객</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="customer">고객 조회</Link>
                  </li>
                  <li>
                    <Link to="add-customer"> 고객 추가</Link>
                  </li>
                </ul>
              </li>
              {/* 고객 끝 */}
              
              {/* 고객 시작 */}
              <li className="has-children">
                <Link to="#">Q & A</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="qna">Q & A 조회</Link>
                  </li>
                  <li>
                    <Link to="add-qna">Q & A 추가</Link>
                  </li>
                </ul>
              </li>
              {/* 고객 끝 */}

              {/* 서비스 메뉴 시작 */}
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* 서비스 메뉴 끝 */}

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
            {/* 메뉴들 끝 */}

            <Link
              to="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- 메뉴 끝 --> */}
    </>
  );
}

export default Nav;
