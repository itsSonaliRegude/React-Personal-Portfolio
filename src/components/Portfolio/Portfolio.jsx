import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Aa from "../../img/Aa.png";
import Bb from "../../img/Bb.png";
import Cc from "../../img/Cc.png";
import Dd from "../../img/Dd.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Website Devlopment</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Aa} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dd} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
