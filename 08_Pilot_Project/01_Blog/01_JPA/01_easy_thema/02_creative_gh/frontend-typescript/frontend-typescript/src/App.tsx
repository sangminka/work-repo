import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "simplelightbox/dist/simple-lightbox.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
