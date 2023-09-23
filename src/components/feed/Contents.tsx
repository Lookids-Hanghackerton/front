import { FeedDetailData } from "@/apis/interfaces/Feeds";

const Contents = ({ content, hashTag: hashTags }: Pick<FeedDetailData, "content" | "hashTag">) => {
  return (
    <>
      <p className={"text-sm pb-2"}>{content}</p>
      <div className={"pb-8"}>
        {hashTags.map((hashTag, idx) => (
          <span key={idx} className={"mr-2 text-sm cursor-pointer  text-blue-700"}>
            {hashTag}
          </span>
        ))}
      </div>
    </>
  );
};

export default Contents;
