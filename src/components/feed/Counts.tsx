import { FeedDetailData } from "@/apis/interfaces/Feeds";

const Counts = ({ likeCount, replyCount }: Pick<FeedDetailData, "likeCount" | "replyCount">) => {
  return (
    <div className={"flex justify-between items-center pb-3"}>
      <p className={"text-gray-700 text-sm"}>
        좋아요 <span className={"text-black font-bold"}>{likeCount}</span>개
      </p>

      <p className={"text-gray-700 text-sm"}>
        댓글 <span className={"text-black font-bold"}>{replyCount}</span>개
      </p>
    </div>
  );
};

export default Counts;
