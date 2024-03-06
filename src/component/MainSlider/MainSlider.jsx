import React from 'react'
import Slider from "react-slick";
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        autoplay: true,
        arrows:false,
    };
    return (
        <div className=' container-fluid py-2'>
            <Slider {...settings}>
                <img src={slider1} alt="" className='w-100' height='300px' />
                <img src={slider2} alt="" className='w-100' height='300px' />
                <img src={slider3} alt="" className='w-100' height='300px' />

            </Slider>
        </div>
    )
}
