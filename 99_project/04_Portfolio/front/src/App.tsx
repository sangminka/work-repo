import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Header from './components/common/Header';
import "../src/assets/css/styles.css"


function App() {
 
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='*' element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
