import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FeedData } from "@/apis/interfaces/Feeds";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";

const Feeds = ({ feeds }: { feeds: FeedData[] }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 200: 2, 600: 3 }} className={"px-6"} key={feeds.length}>
      <Masonry gutter={"10px"}>
        {feeds.map(({ feedsId, content, likeCount, replyCount, pictures, hashTag, member }) => (
          <Measure key={feedsId}>
            {({ measureRef }) => (
              <div ref={measureRef}>
                <FeedDetail
                  member={member}
                  feedsId={feedsId}
                  content={content}
                  likeCount={likeCount}
                  replyCount={replyCount}
                  pictures={pictures}
                  hashTag={hashTag}
                />
              </div>
            )}
          </Measure>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Feeds;

export const FeedDetail = ({ feedsId, content, likeCount, pictures, member }: FeedData) => {
  return (
    <Link href={`/feed/${feedsId}`} className={"w-full cursor-pointer"}>
      <div className={"relative px-1"}>
        <Image
          width={120}
          height={120}
          key={pictures[0]}
          src={pictures[0]}
          style={{ width: "100%", borderRadius: "8px" }}
          className={"w-full rounded-lg"}
          alt={"feed"}
        />
        {pictures.length > 1 && (
          <div className={"absolute top-2 rounded-2xl font-bold text-zinc-50 right-2 bg-zinc-400 text-xs px-2 py-0.5"}>
            + {pictures.length}
          </div>
        )}
      </div>

      <div className={"pt-3 py-2 px-[0.5rem]"}>
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center"}>
            <div className={"relative w-6 h-6 mr-2"}>
              <Image src={member.profileImage} alt={"avatar"} className={"rounded-full"} fill={true} sizes={"full"} />
            </div>
            <div className={"text-xs truncate"}>{member.memberNickName}</div>
          </div>
          <div className={"flex items-center gap-1"}>
            <AiOutlineHeart className={"text-gray-500"} />
            <span className={"text-gray-500 text-sm"}>{likeCount}</span>
          </div>
        </div>
        <p className={"text-sm py-2 mb-6"}>{content}</p>
      </div>
    </Link>
  );
};
