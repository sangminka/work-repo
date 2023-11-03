// TODO: 외부 lib inport
//  개발자 css import
import "./assets/css/style.css";

import "aos/dist/aos.css"

import "swiper/"

import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderCom from './components/common/HeaderCom';
import Home from './pages/Home';
import FooterCom from './components/common/FooterCom';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/common/NotFound';

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom/>
      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
      {/* 머리말 */}
      <FooterCom/>
    </div>
  );
}

export default App;
