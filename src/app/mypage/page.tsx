import FeedsTabs from "@/components/mypage/FeedsTabs";
import ProfileFeeds from "@/components/mypage/ProfileFeeds";
import ProfileTabs from "@/components/mypage/ProfileTabs";
import { getTrendFeeds } from "@/apis/controllers/useGetTrendFeeds";
import DefaultImage from "/public/blank.png";
import Image from "next/image";

const Page = async () => {
  const feedList = await getTrendFeeds("인기순");
  return (
    <>
      <ProfileTabs />
      <div className="flex h-100 w-full px-10 py-5">
        <Image 
          width={100}
          height={100}
          src={DefaultImage} 
          alt="프로필 기본 이미지"
        />
        <div className="flex justify-center content-center px-40">
          <div>게시글 팔로워 팔로잉</div>
        </div>
      </div>
      <div>
        <div>소개글</div>
      </div>
      <div className="flex justify-center gap-5 px-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">프로필 편집</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">프로필 공유</button>
      </div>
      <FeedsTabs />
      <ProfileFeeds feedList={feedList} />
    </>
  );
};

export default Page;
