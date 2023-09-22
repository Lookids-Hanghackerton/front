import FeedsTabs from "@/components/mypage/FeedsTabs";
import ProfileFeeds from "@/components/mypage/ProfileFeeds";
import ProfileTabs from "@/components/mypage/ProfileTabs";

const Page = () => {
  return (
    <>
      <ProfileTabs />
      <div className="flex">
        <div>프로필 이미지</div>
        <div>게시글 팔로워 팔로잉</div>
      </div>
      <div>
        <div>소개글</div>
      </div>
      <div className="flex justify-center gap-5 px-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">프로필 편집</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">프로필 공유</button>
      </div>
      <FeedsTabs />
      <div>보관함 페이지</div>
    </>
  );
};

export default Page;
