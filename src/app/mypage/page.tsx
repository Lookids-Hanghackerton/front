import { cookies } from "next/headers";
import { Cookie } from "@/interfaces/Cookie";
import ProfileHeader from "@components/mypage/ProfileHeader";
import ProfileTabs from "@components/mypage/ProfileTabs";
import ProfileImageEx from "@components/mypage/ProfileImageEx";
import FollowCounter from "@components/mypage/FollowCounter";
import ProfileButton from "@components/mypage/ProfileButton";
import ProfileFeeds from "@components/mypage/ProfileFeeds";

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
        <FollowCounter memberUniqueId={cookie.memberUniqueId} memberNickName={cookie.memberNickName} />
      </div>
      <div>
        <div className="py-5 px-10">소개글을 작성해주세요</div>
      </div>
      <ProfileButton />
      {/*<FeedsTabs />*/}
      <ProfileFeeds memberUniqueId={cookie.memberUniqueId} />
    </>
  );
};

export default Page;
