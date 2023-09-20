"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div className={"w-full"} key={idx}>
          <Image
            width={100}
            height={100}
            className={"w-full"}
            src={`https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`}
            alt="avatar"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
