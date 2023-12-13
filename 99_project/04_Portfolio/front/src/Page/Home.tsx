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

      {/* <!-- skill--> */}
      <div className="page-section bg-black" id="portfolio">
        <div className="container">
          <div className="text-center t">
            <h2 className="section-heading text-uppercase text-white">Skill</h2>
          </div>
          <div className="row">
            {/* 1 div */}
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
              {/* develope toll */}
              <div className="skill_div mt-3">
                <h1 className="underLine">Development Tool</h1>

                <div className="d-flex align-items-center justify-content-center">
                  <div className="mr-5">
                    <img
                      className="simg"
                      src={require("../assets/img/skill/vscode.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="simg"></div>
                  <div>
                    <img
                      className="simg"
                      src={require("../assets/img/skill/iJ.jpg")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/eclipse.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* 2 div */}
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

              {/* version skill */}
              <div className="skill_div mt-3">
                <h1 className="underLine">Version Control</h1>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/github.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* 3 div */}
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Data skill */}
              <div className="skill_div">
                <h1 className="underLine">Data</h1>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="simg"
                    src={require("../assets/img/skill/oracle db.png")}
                    alt=""
                  />
                  <img
                    className="mybatis"
                    src={require("../assets/img/skill/mybatis.png")}
                    alt=""
                  />
                  <img
                    className="simg"
                    src={require("../assets/img/skill/jpa.png")}
                    alt=""
                  />
                </div>
              </div>

              {/* OS skill */}
              <div className="skill_div mt-3">
                <h1 className="underLine">OS</h1>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/linux.png")}
                    alt=""
                  />
                </div>
              </div>

              {/* 기타 toll */}
              <div className="skill_div mt-3">
                <h1 className="underLine">기타</h1>

                <div className="d-flex align-items-center justify-content-center">
                  <div className="mr-5">
                    <img
                      className="apatch"
                      src={require("../assets/img/skill/Apache Tomcat.png")}
                      alt=""
                    />
                  </div>
                  {/* <div className="div_container"></div> */}
                  <div>
                    <img
                      className="simg"
                      src={require("../assets/img/skill/docker.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="bimg"
                    src={require("../assets/img/skill/Raspberry Pi.png")}
                    alt=""
                  />
                </div>
              </div>



              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About--> */}
        <div className="page-section" id="about">
            <div className="container">
                <div className="text-center mb-3">
                    <h2 className="section-heading text-uppercase">교육</h2>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018</h4>
                                <h4 className="subheading">동서대학교</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">라인트레이서 제작 및 프로그램밍을 통해 바퀴회전 모터 제어</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2019</h4>
                                <h4 className="subheading">동서대학교</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">리눅스, c언어 기초 html, 자료구조 및 알고리즘 (스택,큐 알고리즘)</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2021년</h4>
                                <h4 className="subheading">동서대학교</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">라즈베리파이 미세먼지 감지 센서 및 led 센서,Python프로그래밍</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2022년</h4>
                                <h4 className="subheading">동서대학교</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">인공지능 아이돌 영상편집 알고리즘 프로젝트,컴퓨터
                    비전,웹서버 프로그래밍</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2023년</h4>
                                <h4 className="subheading">그린 컴퓨터 아카데미</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">항공사 페이지 제작(예약,항공권 조회,예약 완료) <a href="http://greenairline.shop/">http://greenairline.shop/</a></p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    </>
  );
}

export default Home;
