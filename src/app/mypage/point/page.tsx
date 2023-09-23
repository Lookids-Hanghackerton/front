import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = () => {
  return (
    <>
      <ProfileHeader text={"내 포인트 사용하기"} />
      <ProfileTabs />
    </>
  );
};

export default Page;
