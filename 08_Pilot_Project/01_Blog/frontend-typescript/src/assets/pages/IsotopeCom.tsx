//IsotopeCom.tsx
import React, { useEffect } from 'react'
import initMain from '../js/initMain'

function IsotopeCom() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <div>
    {/* 소메뉴 부분 시작 */}
    <div className="row g-3">
      <div className="col-lg-12 text-center">
        <ul className="list-inline" id="portfolio-flters">
          {/* <!-- isotopo 필터 정의 --> */}
          <li className="mx-3 active" data-var="*">
            All Projects
          </li>
          <li className="mx-3" data-var=".first">
            Basic Develop
          </li>
          <li className="mx-3" data-var=".second">
            Advanced Develop
          </li>
        </ul>
      </div>
    </div>
    {/* 소메뉴 부분 끝 */}

    {/* <!-- isotope 필터 : .first, .second  시작--> */}
    <div className="row g-3 portfolio-container">
      <div className="col-lg-3 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
          <img
            className="img-fluid"
            src={require("../../assets/img/project/project-1.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
          <img
            className="img-fluid"
            src={require("../../assets/img/project/project-2.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
          <img
            className="img-fluid"
            src={require("../../assets/img/project/project-3.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
          <img
            className="img-fluid"
            src={require("../../assets/img/project/project-4.jpg")}
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
          <img
            className="img-fluid"
            src={require("../../assets/img/project/project-5.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
    {/* <!-- isotope 필터 : .first, .second  끝--> */}

  </div>
    )
}

export default IsotopeCom