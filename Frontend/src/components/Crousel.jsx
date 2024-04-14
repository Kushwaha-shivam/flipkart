import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Crousel = ({ images }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings}>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-[50vh] object-cover " />
                </div>
            ))}
        </Slider>
    )
}

export default Crousel
