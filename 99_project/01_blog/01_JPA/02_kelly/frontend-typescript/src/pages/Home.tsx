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
        <h1>Kelly Adams</h1>
        <h2>I'm a professional illustrator from San Francisco</h2>
        <a href="about" className="btn-about">About Me</a>
      </div>
    </section>
    {/* !-- End Hero --> */}
    </>
  )
}

export default Home