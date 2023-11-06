// TODO: 외부 lib inport
//  개발자 css import
import "./assets/css/style.css";

import "aos/dist/aos.css"

import "swiper/swiper-bundle.css"

import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderCom from './components/common/HeaderCom';
import Home from './pages/Home';
import FooterCom from './components/common/FooterCom';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Events from "./pages/Events";
import CustomerListPage from "./pages/customer/CustomerListPage";
import AddCustomerPage from "./pages/customer/AddCustomerPage";
import QnaListPage from "./pages/qna/QnaListPage";
import AddQnaPage from "./pages/qna/AddQnaPage";
import CustomerPage from "./pages/customer/CustomerPage";
import QnaPage from "./pages/qna/QnaPage";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom/>
      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/events" element={<Events/>}/>

        {/* Customer */}
        <Route path="/customer" element={<CustomerListPage/>}/>
        <Route path="/customer/:cid" element={<CustomerPage />} />

        <Route path="/add-customer" element={<AddCustomerPage/>}/>

        {/* q & a */}
        <Route path="/qna" element={<QnaListPage/>}/>
        <Route path="/qna/:qno" element={<QnaPage/>}/>
        <Route path="/add-qna" element={<AddQnaPage/>}/>


      </Routes>
    
      {/* 머리말 */}
      <FooterCom/>
    </div>
  );
}

export default App;
