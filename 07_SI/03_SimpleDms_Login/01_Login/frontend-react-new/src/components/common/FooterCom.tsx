import React from 'react'
import './Css/Footer.css';


function FooterCom() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="text">© {new Date().getFullYear()} Your Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterCom