import React, { useEffect } from "react";
import closeModal from "../assets/img/close-icon.svg";
import Scripts from "../assets/js/scripts";

function Home() {
  useEffect(() => {
    Scripts();
  }, []);
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
                <div className="timeline-body">
                  <p className="text-muted">
                    라인트레이서 제작 및 프로그램밍을 통해 바퀴회전 모터 제어
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019</h4>
                  <h4 className="subheading">동서대학교</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    리눅스, c언어 기초 html, 자료구조 및 알고리즘 (스택,큐
                    알고리즘)
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2021년</h4>
                  <h4 className="subheading">동서대학교</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    라즈베리파이 미세먼지 감지 센서 및 led 센서,Python프로그래밍
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2022년</h4>
                  <h4 className="subheading">동서대학교</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    인공지능 아이돌 영상편집 알고리즘 프로젝트,컴퓨터
                    비전,웹서버 프로그래밍
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2023년</h4>
                  <h4 className="subheading">그린 컴퓨터 아카데미</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    항공사 페이지 제작(예약,항공권 조회,예약 완료){" "}
                    <a href="http://greenairline.shop/">
                      http://greenairline.shop/
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Portfolio Grid--> */}
      <div className="page-section bg-black" id="team">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
          </div>
          <div className="row text-white">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 1--> */}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/reserve_1.png")}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <h5 className="portfolio-caption-heading">예약 페이지</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 2--> */}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/reserve_2.png")}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <h5 className="portfolio-caption-heading">
                    항공권 조회 페이지
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 3--> */}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/reserve_3.png")}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <h5 className="portfolio-caption-heading">결제 페이지</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 4--> */}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/portfolio.png")}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <h5 className="portfolio-caption-heading">포트폴리오</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio item 1 modal popup--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeModal} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase mb-5">예약 페이지</h2>
                    <img
                      className="img-fluid_modal d-block mx-auto"
                      src={require("../assets/img/portfolio/reserve_1.png")}
                      alt="..."
                    />
                    <h4>
                      예약을 하기위한 항공기 조회를 위해 정보를 입력하는 페이지
                    </h4>
                    <div style={{ textAlign: "left" }}>
                      <ul>
                        <li>여정/날짜선택(모달사용)</li>
                        <li>탑승 인원 선택(데이터피커 사용)</li>
                        <li>좌석 등급 선택(html에서 직접 선택)</li>
                      </ul>
                      <p>
                        해당 페이지에서 입력한 정보를 바탕으로 항공기 정보를
                        검색 합니다
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio item 2 modal popup--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeModal} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase mb-5">항공권 조회 페이지</h2>
                    <img
                      className="img-fluid_modal d-block mx-auto"
                      src={require("../assets/img/portfolio/reserve_2.png")}
                      alt="..."
                    />
                    <h4>
                      예약 페이지에서 받은 정보를 이용해 항공권을 조회하는
                      페이지
                    </h4>
                    <div style={{ textAlign: "left" }}>
                      <ul>
                        <li>
                          {" "}
                          출·도착지 출·도착 날짜를 바탕으로 항공권을 검색
                        </li>
                        <li>
                          {" "}
                          위에 있는 선택 내용을 보여주는 바를 이용하여
                          사용자에게 선택한 내용을 즉각적으로 알수있도록 설계
                        </li>
                        <li>
                          {" "}
                          위에 있는 선택 내용을 보여주는 바를 이용하여 정보를
                          변경할수 있게 하여 사용자가 쉽게 다른 항공권 정보를
                          찾아볼수 있음
                        </li>
                        <li>
                          {" "}
                          항공권별 출·도착 시간 요금을 비교할 수있음 해당
                          페이지에서
                        </li>
                        <li>
                          {" "}
                          선택한 항공권을 바탕으로 결제 페이지에서 결제를 진행
                        </li>
                      </ul>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio item 3 modal popup--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              {" "}
              <img src={closeModal} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body text-left">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase mb-5">결제 페이지</h2>

                    <img
                      className="img-fluid_modal d-block mx-auto"
                      src={require("../assets/img/portfolio/reserve_3.png")}
                      alt="..."
                    />

                    <h4>
                      이전 페이지에서 선택한 항공권 정보를 보여주는 페이지
                    </h4>
                    <div style={{ textAlign: "left" }}>
                      <ul>
                        <li>
                          탑승자 입력은 앞서 선택한 인원수에 따라 아코디언을
                          반복해서 입력하게함
                        </li>
                        <li>전화번호,이메일등 유효성 검사 진행</li>
                        <li>
                          모든 정보가 입력되지 않으면 정보가 저장되지 않음
                        </li>
                        <li>
                          결제 버튼 클릭시 탑승자 정보와 예약정보가 저장되는데
                          여기서 탑승자 정보가 예약정보에 저장되어야 하기 때문에
                          await,async를 이용해서 순서를 넣어줌
                        </li>
                      </ul>
                    </div>
            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio item 4 modal popup--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeModal} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">포트폴리오 사이트</h2>
                    <img
                      className="img-fluid_modal d-block mx-auto"
                      src={require("../assets/img/portfolio/portfolio.png")}
                      alt="..."
                    />
                    <h4>
                      리엑트,typescript 등 프론트엔드를 이용한 포트폴리오 사이트
                    </h4>
                  
                  </div>
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
