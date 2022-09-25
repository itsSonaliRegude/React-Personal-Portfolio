import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked at ACES
          </span>
          <span>as a Technical Head</span>
          <spane>
          Key Role was to Handle the Official Website of ACES and 
            <br />
            performing necessary tasks related to the systems
including troubleshooting any technical issues
            
          </spane>
         
            <a href="https://aces.dypvp.edu.in/">
            <button className="button s-button">ACES</button>
            </a>
        
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      
        {/* background Circles */}
        
      </div>
    
  );
};

export default Works;
