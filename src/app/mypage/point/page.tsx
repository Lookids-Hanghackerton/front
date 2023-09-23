import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = () => {
  return (
    <>
      <ProfileHeader text={"UserName"} />
      <ProfileTabs />
      <div>
        <div></div>
      </div>
    </>
  );
};

export default Page;
