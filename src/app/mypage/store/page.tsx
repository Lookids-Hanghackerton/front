import FeedsTabs from "@/components/mypage/FeedsTabs";
import ProfileFeeds from "@/components/mypage/ProfileFeeds";
import ProfileTabs from "@/components/mypage/ProfileTabs";
import { getTrendFeeds } from "@/apis/controllers/useGetTrendFeeds";
import DefaultImage from "/public/blank.png";
import Image from "next/image";
import ProfileButton from "@/components/mypage/ProfileButton";
import FollowCounter from "@/components/mypage/FollowCounter";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = async () => {
  const feedList = await getTrendFeeds("인기순");
  return (
    <>
      <ProfileHeader text={"UserName"} />
      <ProfileTabs />
      <div className="flex h-100 w-full px-10 py-5">
        <Image className="rounded-full" width={100} height={100} src={DefaultImage} alt="프로필 기본 이미지" />
        <FollowCounter />
      </div>
      <div>
        <div className="py-5 px-10">소개글을 작성해주세요</div>
      </div>
      <ProfileButton />
      <FeedsTabs />
      <ProfileFeeds feedList={feedList} />
      <div>보관함 페이지</div>
    </>
  );
};

export default Page;
