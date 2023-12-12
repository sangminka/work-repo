import React from "react";

import "../assets/img/icon/icon1.png";
function Home() {
  return (
    <>
      {/* <!-- About Me--> */}
      <div className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <h3 className="section-subheading text-muted">
              웹 개발자 &amp; 프론트/백엔드 개발자
            </h3>
          </div>

          {/* aboutme ul */}
          <div className="row justify-content-center">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled text-left mb-3">
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon1.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>생년월일</strong>: 1999/10/18
                    </h4>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon3.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>연락처</strong>: 010-7630-2058
                    </h4>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon5.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>주소</strong>: 경상남도 창원시 진해구
                    </h4>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled text-left mb-3">
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon2.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>나이</strong>: 24
                    </h4>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon4.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>학교</strong>: 동서대학교
                    </h4>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      className="about_icon me-2"
                      src={require("../assets/img/icon/icon6.png")}
                      alt="Icon"
                    />
                    <h4 className="ms-3 mb-0">
                      <strong>이메일</strong>: rkdtkdals3880@naver.com
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- skil--> */}
      <div className="page-section bg-black" id="portfolio">
        <div className="container">
          <div className="text-center t">
            <h2 className="section-heading text-uppercase text-white">Skill</h2>
          </div>
          <div className="row">

            {/* front div */}
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* front skill */}
              <div className="skill_div">
                <h1 className="underLine">Frontend</h1>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="simg"
                    src={require("../assets/img/skill/html5.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/css3.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/js.png")}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/react.png")}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/jQuery.png")}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/axios.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* back div */}
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* back skill */}
              <div className="skill_div">
                <h1 className="underLine">Backend</h1>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="simg"
                    src={require("../assets/img/skill/java.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/jsp.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/python.png")}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/spring boot.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* data div */}
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* back skill */}
              <div className="skill_div">
                <h1 className="underLine">Data</h1>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="simg"
                    src={require("../assets/img/skill/java.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/jsp.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/python.png")}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/spring boot.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
