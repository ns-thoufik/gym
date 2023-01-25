import React from "react";
import './Footer.css'
import Github from "../../assets/github.png";
import INSTAGRAM from "../../assets/instagram.png";
import LINKEDIN from "../../assets/linkedin.png";
import LOGO from "../../assets/logo.png";


const Footer = () => {
    return (
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
            <img src={Github} alt="" />
            <img className="insta" src={INSTAGRAM} alt="" />
            <img src={LINKEDIN} alt="" />
            </div>
            <div className="logo-f">
                <img src={LOGO} alt="" />
            </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;