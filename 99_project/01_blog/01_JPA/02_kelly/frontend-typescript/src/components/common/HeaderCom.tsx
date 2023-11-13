import React from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderCom() {
  const location = useLocation(); // 현재 페이지의 경로 가져오기

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <a href="/" className={location.pathname === "/" ? "active" : ""}>
              SangMin
            </a>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul className="nav">
              <li className="nav-itme">
                <a
                  href="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li className="nav-itme">
                <a
                  href="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              {/* <li className='nav-itme'>
                <a href="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                  Resume
                </a>
              </li> */}
              <li className="nav-itme">
                <a
                  href="/services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Services
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
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/customer">
                      조회 페이지
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/add-customer">
                      추가 페이지
                    </a>
                  </li>
                  {/* <li><a className="dropdown-item" href="/customer/:cid">공공 데이터</a></li> */}
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    <a className="dropdown-item" href="/cinema">
                      공공 데이터
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-itme">
                <a
                  href="/portfolio"
                  className={location.pathname === "/portfolio" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-itme">
                <a
                  href="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
          {/* <!-- .navbar --> */}

          <div className="header-social-links">
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
