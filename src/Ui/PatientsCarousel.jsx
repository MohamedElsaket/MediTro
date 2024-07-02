import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ex perspiciatis quod molestias laboriosam, sunt tempore commodi reiciendis,
                eos, illo fugit voluptatem quasi repudiandae quam. 
                Voluptates obcaecati neque esse odit inventore.
            </h5>
            <h4>John Deo</h4>
            <p>PATIENT</p>
        </div>
        <div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ex perspiciatis quod molestias laboriosam, sunt tempore commodi reiciendis,
                eos, illo fugit voluptatem quasi repudiandae quam. 
                Voluptates obcaecati neque esse odit inventore.
            </h5>
            <h4>John Deo</h4>
            <p>PATIENT</p>
        </div>
        <div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ex perspiciatis quod molestias laboriosam, sunt tempore commodi reiciendis,
                eos, illo fugit voluptatem quasi repudiandae quam. 
                Voluptates obcaecati neque esse odit inventore.
            </h5>
            <h4>John Deo</h4>
            <p>PATIENT</p>
        </div>
      </Slider>
    );
  }