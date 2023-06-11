import React from "react";
import "./HeaderSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImg1 } from "../../utils/images";
import { sliderImg2 } from "../../utils/images";
const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={sliderImg1} alt="slider1" />
            </div>
            <div className="slider-item">
              <img src={sliderImg2} alt="slider1" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default HeaderSlider;
