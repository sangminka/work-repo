// 개발자 css import
import "./assets/css/style.css";
// 외부 lib import
import "aos/dist/aos.css"
import "swiper/swiper-bundle.css"
// import Isotope from 'isotope-layout';


import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/common/HeaderCom";
import Home from "./pages/Home";
import FooterCom from "./components/common/FooterCom";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import PortFolio from "./pages/PortFolio";

function App() {
  return (
    <div className="App">
      <HeaderCom />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/portFolio" element={<PortFolio/>}/>


      </Routes>
      <FooterCom />
    </div>
  );
}

export default App;
