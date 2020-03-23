import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default (props) => {
  const { className, children } = props;

  let settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 3, // 한 view에 보이는 슬라이드 갯수
    slidesToScroll: 1, // 한개씩 슬라이드
    adaptiveHeight: true,
  };

  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
};
