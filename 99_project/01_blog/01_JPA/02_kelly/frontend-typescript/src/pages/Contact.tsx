import React, { useEffect } from 'react'
import initMain from '../assets/js/main';
import TitleCom from './../components/common/TitleCom';

function Contact() {

      useEffect(()=>{
        initMain();
      },[])

  return (
    <>
      <main id="main">

{/* ======= Contact Section ======= */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>Contact</h2>
    </div>

 
    <div className="row mt-5">

      <div className="col-4 offset-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>address:</h4>
            <p>경상남도 창원시 진해구 용원동 일신 아파트 108동402호</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email</h4>
            <p>rkdtkdals3880@naver</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>010 - 7630 2058 </p>
          </div>

          <div className="git">
            <i className="bi bi bi-github"></i>
            <h4>git:</h4>
            <p><a href='https://github.com/sangminka/work-repo'>https://github.com/sangminka/work-repo</a></p>
          </div>

        </div>

      </div>

      
    </div>

  </div>
</section>{/* End Contact Section */}

</main>{/* End #main */}
    </>

  )
}

export default Contact