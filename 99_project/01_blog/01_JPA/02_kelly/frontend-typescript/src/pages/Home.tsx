import React, { useEffect } from 'react'
import initMain from '../assets/js/main';


function Home() {
  useEffect(()=>{
    initMain();
  },[])
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
        <h1>PortFolio</h1>
        <h2>안녕하세요. 개발자가 되고 싶은 강상민 입니다.</h2>
        <a href="about" className="btn-about">About Me</a>
      </div>
    </section>
    {/* !-- End Hero --> */}
    </>
  )
}

export default Home