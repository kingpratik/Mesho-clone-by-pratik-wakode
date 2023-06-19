// import { width } from '@mui/system';
// import { borderRadius } from '@mui/system';
import React from 'react'
import Slider from "react-slick"
import {
  bannerOne,
  bannerTwo,
  bannerThree,
  bannerFour,

} from '../../Assests/index'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slideToshow: 2,
    slideToScroll: 2,
    arrows: false,
    speed: 400,

    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          top: "79%",
          left: "0",
          right: "0",
          margin : "0 auto",
          transform: "translate(-50% -505",
          width: "208px",
        }}
      >
        <ul style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",



        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          height: "30px",
          width: "30px",
          color: "blue",
          border: "1px blue solid",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          padding: "1px 0"


        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]



  };
  return (
    <div className='w-full box-border  '>
      <div className='w-full h-full relative cursor-pointer '>
        <Slider {...settings} >

          <div> <img src={bannerOne} alt='bannerOne' /></div>
          <div><img src={bannerTwo} alt='bannerTwo' /></div>
          <div><img src={bannerThree} alt='bannerThree' /></div>
          <div><img src={bannerFour} alt='bannerFour' /></div>





          {/* <img src={bannerFive} alt='bannerFive' /> */}



        </Slider>
      </div>

    </div>
  );
}

export default Banner