import React, { useEffect } from "react";
import initMain from "../assets/js/main";
//
function About() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>웹 개발자 &amp; 프론트/백엔드 개발자</h3>
                <p className="fst-italic">
                  성실히 노력하는 개발자 강상민 입니다.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        {/* <img src="assets/img/icon/birthday.png" className="icon" alt="" /> */}
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>생년월일</strong>: 1999/10/18
                        </h4>
                      </li>
                      {/* <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li> */}
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>연락처</strong>: 010 7630 2058
                        </h4>
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>주소지</strong>: 경상남도 창원시 진해구
                        </h4>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>나이</strong>: 24
                        </h4>
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>학력</strong>: 동서대학교
                        </h4>
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <h4>
                          <strong>이메일</strong>: rkdtkdals3880@naver.com
                        </h4>
                      </li>
                      {/* <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li> */}
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}

        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                {/* <h3 className="resume-title">Sumary</h3> */}
                {/* <div className="resume-item pb-0">
                  <h4>Alice Barkley</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>

                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div> */}

                <h3 className="resume-title">교육</h3>
                <div className="resume-item">
                  <h4>동서대학교</h4>
                  <h5>2018년</h5>
                  <p>
                    {/* <em>라인트레이서 모터 제어</em> */}
                  </p>
                  <p>
                    라인트레이서 제작 및 프로그램밍을 통해 바퀴회전 모터 제어
                  </p>
                </div>
                <div className="resume-item">
                  {/* <h4>Bachelor of Fine Arts &amp; Graphic Design</h4> */}
                  <h5>2019년</h5>
                  <p>
                    리눅스, c언어 기초 html, 자료구조 및 알고리즘 (스택,큐
                    알고리즘)
                  </p>
                </div>

                <div className="resume-item">
                  {/* <h4>Bachelor of Fine Arts &amp; Graphic Design</h4> */}
                  <h5>2021년</h5>
                  <p>
                    라즈베리파이 미세먼지 감지 센서 및 led 센서,Python프로그래밍
                  </p>
                </div>

                <div className="resume-item">
                  {/* <h4>Bachelor of Fine Arts &amp; Graphic Design</h4> */}
                  <h5>2022년</h5>
                  <p>
                    인공지능 아이돌 영상편집 알고리즘 프로젝트,컴퓨터
                    비전,웹서버 프로그래밍{" "}
                  </p>
                </div>

                <div className="resume-item">
                  {/* <h4>Bachelor of Fine Arts &amp; Graphic Design</h4> */}
                  <h5>2023</h5>
                  <p>
                    소프트웨어 설계, 구현, 테스트 → 서비스개선 역량 함양 <br/>
                    관계형데이터베이스 SQL : 응용 SW에 적합한 데이터를 정의 및
                    조작, 제어 <br/> 자바(Java) : 객체지향 프로그래밍, 공통모듈
                    구현, 웹 애플리케이션 개발 <br/> 애플리케이션 프레임워크 및 DB
                    프레임워크 : 최적화, 네트워크기반 웹 애플리케이션 개발/배포
                    <br/> 오픈 API :　공공데이터 오픈 API 활용법、웹/앱 서비스
                    기획-설계-배포-테스트{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">참여 프로젝트</h3>
             
                <div className="resume-item">
                  {/* <h4>Senior graphic design specialist</h4> */}
                  <h5>2021년</h5>
                  <p>
                    <em>미세먼지 측정 보조베터리 </em><br/>
                    캡스톤 디자인- 라즈베리파이,미세먼지 감지센서를 이용한 미세먼지를 측정 할 수 있는 보조베터리 제작 

                  </p>

                 
                </div>
                <div className="resume-item">
                  {/* <h4>Senior graphic design specialist</h4> */}
                  <h5>2022년</h5>
                  <p>
                    <em>아이돌 영상 자동 편집 알고리즘 작성 </em><br/>
                    캡스톤 디자인 -  FaceLandmark를 잡아주는 모델을 이용하여 얼굴의 좌표를 계산하여 다음 프레임에서 가장 가까운 영상으로 전환하는 방식

                  </p>

                 
                </div>

                <div className="resume-item">
                  {/* <h4>Senior graphic design specialist</h4> */}
                  <h5>2023년</h5>
                  <p>
                    <em> 웹페이지 제작 </em><br/>
                    항공사 사이트를 제작했습니다.

                  </p>

                 
                </div>
                
                
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}

   

  
        {/*  */}
      </main>
      {/* End #main */}
    </>
  );
}

export default About;
