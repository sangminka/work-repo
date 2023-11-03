import React from "react";
// todo : 외부 lib import
// aos css import(npm 설치)
import "aos/dist/aos.css";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import CustomerListPage from "./pages/customer/CustomerListPage";
import AddCustomerPage from "./pages/customer/AddCustomerPage";
import CustomerPage from "./pages/customer/CustomerPage";
import QnaPage from "./pages/qna/QnaPage";
import QnaListPage from "./pages/qna/QnaListPage";
import AddQnaPage from "./pages/qna/AddQnaPage";
// 개발자가 직접 만든 css

// todo : 리액트 import
function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <Nav />
      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements" element={<Elements />} />

        {/* 고객 */}
        <Route path="/customer" element={<CustomerListPage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
        <Route path="/customer/:cid" element={<CustomerPage />} />
        {/* Q & A */}
        <Route path="/qna" element={<QnaListPage />} />
        <Route path="/add-qna" element={<AddQnaPage />} />
        <Route path="/qna/:qno" element={<QnaPage />} />
      </Routes>
      {/* 꼬리말 */}
      <Footer />
    </div>
  );
}

export default App;
