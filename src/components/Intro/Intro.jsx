import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello ! I Am</span>
          <span>Sonali Regude</span>
          <span>
          An enthusiastic fresher with good problem solving and technical skills with keen interest in MERN Stack web Devlopment & currently
          looking for an organization which will Provide me an opportunity to grow and will utilize my knowledge towards the growth of the
          organization.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/itsSonaliRegude"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/sonali-regude-20a8a8204/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/sonali_regude/"><img src={Instagram} alt="" /></a>
        </div>
      </div>
    </div>
   
  );
};

export default Intro;
