import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner2 from "../../assets/images/banner1.png";
import banner1 from "../../assets/images/banner2.png";

class SimpleSlider extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...sliderSettings}>
          <div>
            <img className="slider-img" src={banner1} />
          </div>
          <div>
            <img className="slider-img" src={banner2} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
