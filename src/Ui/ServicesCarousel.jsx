import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMedical, faStethoscope, faPumpMedical, faSuitcaseMedical, faSyringe } from "@fortawesome/free-solid-svg-icons";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider-details">
      <FontAwesomeIcon className='icon p-4 mb-5 fs-1' icon={faTruckMedical} />
        <h2 className="mb-4">Emergancy</h2>
        <p className="mb-4">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button className="main-btn">View More</button>
      </div>
      <div className="slider-details">
      <FontAwesomeIcon className='icon p-4 mb-5 fs-1' icon={faStethoscope} />
        <h2 className="mb-4">Diagnostics</h2>
        <p className="mb-4">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button className="main-btn">View More</button>
      </div>
      <div className="slider-details">
      <FontAwesomeIcon className='icon p-4 mb-5 fs-1' icon={faPumpMedical} />
        <h2 className="mb-4">Treatment</h2>
        <p className="mb-4">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button className="main-btn">View More</button>
      </div>
      <div className="slider-details">
      <FontAwesomeIcon className='icon p-4 mb-5 fs-1' icon={faSuitcaseMedical} />
        <h2 className="mb-4">Surgery</h2>
        <p className="mb-4">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button className="main-btn">View More</button>
      </div>
      <div className="slider-details">
      <FontAwesomeIcon className='icon p-4 mb-5 fs-1' icon={faSyringe} />
        <h2 className="mb-4">Vaccine</h2>
        <p className="mb-4">Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button className="main-btn">View More</button>
      </div>
    </Slider>
  );
}
// icon p-4 mb-5 fs-1