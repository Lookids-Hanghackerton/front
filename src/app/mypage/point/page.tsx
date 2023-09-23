import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = () => {
  return (
    <>
      <ProfileHeader text={"UserName"}/>
      <ProfileTabs />
      <div>포인트로 살수있는 아이템 선택할 수 있는 페이지</div>
    </>
  );
};

export default Page;
