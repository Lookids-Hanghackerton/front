import Image from "next/image";
import Link from "next/link";
import { FeedData } from "@/apis/interfaces/MyFeed";

const MyFeeds = ({ feeds }: { feeds: FeedData[] }) => {
  return (
    <div className={"grid grid-cols-3 gap-2 px-3 pb-3"}>
      {feeds.map(({ feedsId, content, likeCount, replyCount, pictures, hashTag }) => (
        <MyFeedDetail
          feedsId={feedsId}
          content={content}
          likeCount={likeCount}
          replyCount={replyCount}
          pictures={pictures}
          hashTag={hashTag}
        />
      ))}
    </div>
  );
};

export default MyFeeds;

export const MyFeedDetail = ({ feedsId, content, likeCount, pictures }: FeedData) => {
  return (
    <Link href={`/feed/${feedsId}`} className={"w-full cursor-pointer"}>
      <div className={"relative w-full h-52"}>
        <Image fill={true} objectFit={"cover"} key={pictures[0]} src={pictures[0]} alt={"feed"} />
      </div>
    </Link>
  );
};