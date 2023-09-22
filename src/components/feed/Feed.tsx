import Owner from "@components/feed/Owner";
import Functions from "@components/feed/Functions";
import Counts from "@components/feed/Counts";
import Contents from "@components/feed/Contents";
import { FeedDetail } from "@/apis/interfaces/Feeds";
import { useGetFeed } from "@/apis/controllers/useGetFeed";
import ImageCarousel from "@components/feed/ImageCarousel";
import ItemTags from "@components/feed/ItemTags";

interface FeedProps {
  id: number;
  feed: FeedDetail;
}

const Feed = ({ feed, id }: FeedProps) => {
  const data = useGetFeed({ feedId: id, feed });

  const { content, hashTag, likeCount, member, pictures, replyCount } = data.data;

  return (
    <div>
      <Owner member={member} />
      <ImageCarousel pictures={pictures} />
      <ItemTags pictures={pictures} />
      <div className={"px-3"}>
        <Functions />
        <Counts likeCount={likeCount} replyCount={replyCount} />
        <Contents content={content} hashTag={hashTag} />
      </div>
    </div>
  );
};

export default Feed;
