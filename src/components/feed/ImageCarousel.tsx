"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FeedDetailData } from "@/apis/interfaces/Feeds";

const ImageCarousel = ({ pictures }: Pick<FeedDetailData, "pictures">) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {pictures.map((picture, idx) => (
        <div className={"relative w-full h-[50vh]"} key={idx}>
          <Image fill={true} className={"w-full object-cover"} src={picture} alt="avatar" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
