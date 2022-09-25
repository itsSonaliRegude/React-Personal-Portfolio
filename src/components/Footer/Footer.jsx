import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
       
        <span>sonaliregude18@gmail.com</span>
        
        
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/sonali-regude-20a8a8204/">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/itsSonaliRegude"> 
          <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/sonali_regude/">
          <Insta color="white" size={"3rem"} />
          </a>
          
          
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
