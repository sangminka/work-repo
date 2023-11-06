import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/common/HeaderCom";
import Home from "./pages/Home";
import FooterCom from "./components/common/FooterCom";

function App() {
  return (
    <div className="App">
      <HeaderCom />
      <Home />
      <FooterCom />
    </div>
  );
}

export default App;
