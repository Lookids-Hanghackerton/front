import FeedsTabs from "@/components/mypage/FeedsTabs";
import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileButton from "@/components/mypage/ProfileButton";
import FollowCounter from "@/components/mypage/FollowCounter";
import ProfileImageEx from "@/components/mypage/ProfileImageEx";
import { cookies } from "next/headers";
import ProfileHeader from "@components/mypage/ProfileHeader";
import { getMyFeeds } from "@/apis/controllers/useGetMyFeeds";
import ProfileFeeds from "@/components/mypage/ProfileFeeds";

const Page = async () => {
  
  const cookieStore = cookies();
  
  const cookie = cookieStore.getAll().map(cookie => JSON.parse(cookie.value))[0] as Cookie;
  
  // const feedsList = await getMyFeeds("최신순", cookie.memberUniqueId);
  return (
    <>
      <ProfileHeader text={cookie.memberNickName} />
      <ProfileTabs />
      <div className="flex h-100 w-full px-10 py-5">
        <ProfileImageEx image={cookie.profileImage} />
        <FollowCounter />
      </div>
      <div>
        <div className="py-5 px-10">소개글을 작성해주세요</div>
      </div>
      <ProfileButton />
      <FeedsTabs />
      {/* <ProfileFeeds feedsList={feedsList} memberUniqueId={cookie.memberUniqueId}/> */}
    </>
  );
};

export default Page;
