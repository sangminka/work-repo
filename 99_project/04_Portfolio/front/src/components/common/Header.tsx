import React, { useEffect } from "react";
import "../../assets/css/styles.css"
import Scripts from "../../assets/js/scripts";

function Header() {
  return (
    <div>
    {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">PortFolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">About me</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Skill</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Education</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">웹개발 & 프론트/백엔드 개발자</div>
                <div className="masthead-heading text-uppercase">강상민</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="https://github.com/sangminka/work-repo">github</a>
            </div>
        </header>
    </div>
  );
}

export default Header;
