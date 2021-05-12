import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    <div className="Navbar">
      <div className="Nav-main">
        <div className="logo">
          <img className="logo" src="./Images/vc_logo.jpg" />
        </div>
        <div className="Home">HOME</div>
        <div className="About">ABOUT</div>
        <div className="Porfolio">PORTFOLIO</div>
        <div className="Services">SERVICES</div>
        <div className="Hireme">HIRE ME</div>
      </div>
      {/* //left side content */}
      <div className="leftRightContent">
        <div className="Left-side">
          <h1>
            I'm <span>Vivek</span> Chaudhary
          </h1>
          <p>
            This is my official portfolio website to showcase my all works
            related to <br />
            web development and UI design
          </p>
          <br />
          <button>Download CV</button>
        </div>
        <div className="Right-side">
          <img className="rightImg" src="./Images/rightImg2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
