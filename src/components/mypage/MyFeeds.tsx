import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FeedData } from "@/apis/interfaces/MyFeed";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";

const MyFeeds = ({ feeds }: { feeds: FeedData[] }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 200: 2, 600: 3 }} className={"px-5"}>
      <Masonry gutter={"10px"}>
        {feeds?.map(({ feedsId, content, likeCount, replyCount, pictures, hashTag, MyInfo }) => (
          <Measure key={feedsId}>
            {({ measureRef }) => (
              <div ref={measureRef}>
                <MyFeedDetail
                  MyInfo={MyInfo}
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

export default MyFeeds;

export const MyFeedDetail = ({ feedsId, content, likeCount, pictures, MyInfo }: FeedData) => {
  return (
    <Link href={`/feed/${feedsId}`} className={"w-full cursor-pointer"}>
      <div className={"relative"}>
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
      <div className={"py-2"}>
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center"}>
            <div className={"relative w-6 h-6 mr-2"}>
              <Image src={MyInfo.profileImage} alt={"avatar"} className={"rounded-full"} fill={true} sizes={"full"} />
            </div>
            <div className={"text-xs truncate"}>{MyInfo.memberNickName}</div>
          </div>
          <div className={"flex items-center gap-1"}>
            <AiOutlineHeart className={"text-gray-500"} />
            <span className={"text-gray-500 text-sm"}>{likeCount}</span>
          </div>
        </div>
        <p className={"text-sm py-2"}>{content}</p>
      </div>
    </Link>
  );
};