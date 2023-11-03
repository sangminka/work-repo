// todo: external library import
// todo: animate css import (wow 사용시 import 필요)
import "wowjs/css/libs/animate.css";

// todo: simplelightbox css import : app.tsx
import "simplelightbox/dist/simple-lightbox.css";


// todo: internal import
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/common/HeaderCom";
import Home from "./assets/pages/Home";
import { Route, Routes } from "react-router-dom";
import BootstrapIcons from "./assets/pages/BootstrapIcons";
import CounterUp from "./assets/pages/CounterUp";
import CounterUpExam from "./assets/pages/CounterUpExam";
import TypedCom from "./assets/pages/TypedCom";
import TypedComExam from "./assets/pages/TypedComExam";
import WowCom from "./assets/pages/WowCom";
import SimpleLightboxCom from "./assets/pages/SimpleLightboxCom";
import SimpleLightboxExam from "./assets/pages/SimpleLightboxExam";
import OwlCarouselCom from "./assets/pages/OwlCarouselCom";
import OwlCarouselComExam from "./assets/pages/OwlCarouselComExam";
import IsotopeCom from "./assets/pages/IsotopeCom";
import IsotopeComExam from "./assets/pages/IsotopeComExam";
import EasingCom from "./assets/pages/EasingCom";
import Datepicker from "./assets/pages/Datepicker";
import DaterangePicker from "./assets/pages/DaterangePicker";

function App() {
  return (
    <div className="App">
      {/*  머리말  */}
      <HeaderCom />
      {/*  본문  */}
      <div className="container mt-3">
        <Routes>
          {/* / : 홈메뉴(1st 페이지) */}
          <Route path="/" element={<Home />} />
          <Route path="/bootstrap-icons" element={<BootstrapIcons />} />

          {/* CountUp */}
          <Route path="/countup" element={<CounterUp />} />
          <Route path="/countup-exam" element={<CounterUpExam />} />

          {/* typed.js */}
          <Route path="/typed" element={<TypedCom />} />
          {/* 연습2) ["안녕하세요", "또 만납시다.", "잘가세요."]
              <!-- backSpeed: 0, typeSpeed: 0 으로 사용해 보세요 -->
           */}
          <Route path="/typed-exam" element={<TypedComExam />} />

          {/* wowjs.js */}
          <Route path="/wow" element={<WowCom />} />

          {/* simplelightbox */}
          <Route path="/simple-lightbox" element={<SimpleLightboxCom />} />
          <Route path="/simple-lightbox-exam" element={<SimpleLightboxExam />} />

          {/* owl-carousel.tsx */}
          <Route path="/owl-carousel" element={<OwlCarouselCom />} />
          <Route path="/owl-carousel-exam" element={<OwlCarouselComExam />} />
          
          {/* Isotope.tsx */}
          <Route path="/isotope" element={<IsotopeCom />} />
          <Route path="/isotope-exam" element={<IsotopeComExam />} />

          {/* easing */}
          <Route path="/easing" element={<EasingCom />} />

          {/* calendar */}
          <Route path="/datepicker" element={<Datepicker />} />
          <Route path="/daterange-picker" element={<DaterangePicker />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
