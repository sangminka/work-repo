import React, { useEffect, useState } from "react";
//  css import : react의 최고 부모 컴포넌트 (App.tsx)
import "../assets/css/styles.css";
import initMain from "../assets/js/scripts";
import DeptList from "./basic/dept/DeptList";
import AddDept from "./basic/dept/AddDept";
import CustomerList from "./basic/customer/CustomerList";
import AddCustomer from "./basic/customer/AddCustomer";
import Dept from "./basic/dept/Dept";
function Home() {
  const [viewName, setViewName] = useState<String>("");
  // 기본키를 저장할 함수
  const [pid, setPid] = useState<Number>(0);

  // {/* 화면이 뜰때 실행되는 이벤트
  useEffect(() => {
    initMain();
  }, []);

  // todo: 함수 정의
  // 버튼 메뉴에 따라 다른 화면 보여주기 함수 : 클릭 이벤트 함수
  const handleChange = (viewName: string, pid = 0) => {
    setViewName(viewName); // 클릭하면 viewName 변수에 저장
    setPid(pid);
  };

  // 화면 바꿔 보여주기 함수
  const changeView = () => {
    if (viewName === "deptList") {
      return <DeptList handleChange = {handleChange} />;
    } else if (viewName === "addDept") {
      return <AddDept />;
    } else if (viewName === "dept") {
      return <Dept dno = {pid} />;
    } else if (viewName === "customerList") {
      return <CustomerList />;
    } else if (viewName === "addCustomer") {
      return <AddCustomer />;
    }
  };

  return (
    <body id="page-top">
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Your Favorite Place htmlFor Free Bootstrap Themes
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                Start Bootstrap can help you build better websites using the
                Bootstrap framework! Just download a theme and start
                customizing, no strings attached!
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Start Bootstrap has everything you need to get your new website
                up and running in no time! Choose one of our open source, free
                to download, and easy to use themes! No strings attached!
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services--> */}
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio--> */}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* 1st 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/1.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/1.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    React & Springboot & Oracle
                  </div>
                  <div className="project-name">부서 게시판 예제</div>
                </div>
              </a>
              {/* 메뉴 추가 */}
              <div className="text-center">
                <a href="#portfolio-result" />
                <span
                  className="badge rounded-pill text-bg-success"
                  onClick={() => handleChange("deptList")}
                >
                  부서 조회
                </span>
                &nbsp;&nbsp;
                <a href="#portfolio-result" />
                <span
                  className="badge rounded-pill text-bg-danger"
                  onClick={() => handleChange("addDept")}
                >
                  부서 추가
                </span>
              </div>
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/2.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/2.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
              <div>
                <span
                  className="badge rounded-pill text-bg-success"
                  onClick={() => handleChange("customerList")}
                >
                  고객 조회
                </span>
                &nbsp;&nbsp;
                <span
                  className="badge rounded-pill text-bg-danger"
                  onClick={() => handleChange("addCustomer")}
                >
                  고객 추가
                </span>
              </div>
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/3.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/3.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
              <div>
                <span
                  className="badge rounded-pill text-bg-success"
                  onClick={() => handleChange("deptList")}
                >
                  Department 조회
                </span>
                &nbsp;&nbsp;
                <span
                  className="badge rounded-pill text-bg-danger"
                  onClick={() => handleChange("addDept")}
                >
                  Department 추가
                </span>
              </div>
            </div>
            {/* 3rd 이미지 시작 */}
          </div>
        </div>
      </div>

      {/* 여기 */}
      {/* Portfolio - result : 부서/고객 -->*/}
      <section className="content-section" id="portfolio-result">
        <div className="container px-4 px-lg-5">
          {/* 제목 시작 */}
          <div className="content-section-heading text-center">
            {/* <h3 className="text-secondary mb-0">맛보기 샘플 결과</h3> */}
            <h2 className="mb-5 mt-5">Portfolio Result</h2>
          </div>
          {/* 제목 끝 */}
          {/* 게시판 결과 시작 */}
          <div className="row gx-0 mb-5">
            <div className="col-lg-12">{changeView()}</div>
          </div>
          {/* 게시판 결과 시작 */}
        </div>
      </section>

      {/* <!-- Call to action--> */}
      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
          <a
            className="btn btn-light btn-xl"
            href="https://startbootstrap.com/theme/creative/"
          >
            Download Now!
          </a>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <!-- Message input--> */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                {/* <!-- Submit success message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when the form--> */}
                {/* <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* <!-- Submit error message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when there is--> */}
                {/* <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* <!-- Submit Button--> */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-xl disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2023 - Company Name
          </div>
        </div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
      {/* <!-- SimpleLightbox plugin JS--> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script> */}
      {/* <!-- Core theme JS--> */}
      {/* <script src="js/scripts.js"></script> */}
      {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
      {/* <!-- * *                               SB Forms JS                               * *--> */}
      {/* <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *--> */}
      {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
      {/* <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> */}
    </body>
  );
}

export default Home;
