import Measure from "react-measure";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Feeds = () => {
  const items = Array.from({ length: 100 }).map((_, index) => <Feed index={index} />);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 200: 2, 600: 3 }} className={"px-12"}>
      <Masonry gutter={"10px"}>
        {items.map((item, i) => (
          <Measure key={i}>{({ measureRef }) => <div ref={measureRef}>{item}</div>}</Measure>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Feeds;

export const Feed = ({ index }: { index: number }) => {
  return (
    <Link href={`/feed/${index}`} className={"w-full cursor-pointer"}>
      <Image
        width={120}
        height={120}
        key={index}
        src={`https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`}
        style={{ width: "100%", borderRadius: "8px" }}
        className={"w-full rounded-lg"}
        alt={"image"}
      />
      <div className={"py-2"}>
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center"}>
            <div className={"w-6 h-6 mr-2"}>
              <img
                className={"w-full h-full rounded-full"}
                src={`https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`}
                alt="avatar"
              />
            </div>
            <div className={"text-xs truncate"}>Lorem ipsum dolor</div>
          </div>
          <AiOutlineHeart />
        </div>
        <p className={"text-sm py-2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </Link>
  );
};