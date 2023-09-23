import FeedsTabs from "@/components/mypage/FeedsTabs";
import ProfileFeeds from "@/components/mypage/ProfileFeeds";
import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileButton from "@/components/mypage/ProfileButton";
import FollowCounter from "@/components/mypage/FollowCounter";
import ProfileHeader from "@/components/mypage/ProfileHeader";
import { getTrendFeeds } from "@/apis/controllers/useGetTrendFeeds";
import { Info } from "@/apis/interfaces/MyPage";
import ProfileImageEx from "@/components/mypage/ProfileImageEx";
import { getMyFeeds } from "@/apis/controllers/useGetMyFeeds";



const Page = async ({ memberUniqueId }: Info) => {
  // const feedList = await getTrendFeeds("인기순");
  const feedList = await getMyFeeds("최신순");

  return (
    <>
      {/* <ProfileHeader text={"UserName"}/> */}
      <ProfileTabs />
      <div className="flex h-100 w-full px-10 py-5">
        <ProfileImageEx />
        <FollowCounter />
      </div>
      <div>
        <div className="py-5 px-10">
          소개글을 작성해주세요
        </div>
      </div>
      <ProfileButton />
      <FeedsTabs />
      {/* <ProfileFeeds feedList={feedList} /> */}
    </>
  );
};

export default Page;
