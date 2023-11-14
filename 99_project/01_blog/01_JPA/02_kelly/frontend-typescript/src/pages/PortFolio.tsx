// Portfolio.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/main";

function Portfolio() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      <main id="main">
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skils</h2>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-front">front</li>
                  <li data-filter=".filter-back">back</li>
                  <li data-filter=".filter-data">data</li>
                </ul>
              </div>
            </div>
            <section id="skills" className="skills">
              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >

                {/* front */}
                <div className="col-lg-6 col-md-6 portfolio-item filter-front">
                  {/* ======= Skills Section ======= */}
                  <div className="row skills-content">
                    <div className="col-lg-12">
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
                    </div>
                  </div>
                  {/* End Skills Section */}
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item filter-front">
                  {/* ======= Skills Section ======= */}
                  <div className="row skills-content">
                    <div className="col-lg-12">
                      <div className="progress">
                        <span className="skill">
                          CSS <i className="val">70%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Skills Section */}
                </div>

                {/* back */}
                <div className="col-lg-6 col-md-6 portfolio-item filter-back">
                  {/* ======= Skills Section ======= */}
                  <div className="row skills-content">
                    <div className="col-lg-12">
                      <div className="progress">
                        <span className="skill">
                          JAVA <i className="val">70%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Skills Section */}
                </div>

                {/* data */}
                <div className="col-lg-6 col-md-6 portfolio-item filter-data">
                  {/* ======= Skills Section ======= */}
                  <div className="row skills-content">
                    <div className="col-lg-12">
                      <div className="progress">
                        <span className="skill">
                          SQL <i className="val">60%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Skills Section */}
                </div>

              
              </div>
            </section>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Portfolio;
