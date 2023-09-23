import { Feed } from "@/apis/interfaces/Ranking";
import Image from "next/image";

const ImageSlide = ({ feedsList }: { feedsList: Feed[] }) => {
  const pictures = feedsList[0].pictures
    .slice(0, 3)
    .concat(Array(3 - feedsList[0].pictures.length).fill(feedsList[0].pictures[0]));

  return (
    <div className="flex gap-2 px-3">
      {pictures.map((picture, index) => {
        console.log(picture);
        return (
          <div key={index} className="relative bg-black flex-1 h-52 rounded-lg overflow-hidden">
            <Image fill={true} objectFit="cover" src={picture} alt={"image"} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlide;
