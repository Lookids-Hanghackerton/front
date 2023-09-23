import ProfileTabs from "@/components/mypage/ProfileTabs";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = () => {
  return (
    <>
      <ProfileHeader text={"내 포인트 사용하기"} />
      <ProfileTabs />
      <img
        src="https://cdn.discordapp.com/attachments/1152124462322421816/1155268042947838024/270135425-83802ea0-aea9-4838-b5b2-92a3d89e6240.png"
        alt=""
      />
      <img src="https://kr.object.ncloudstorage.com/kikids/111111.png" alt="" />
    </>
  );
};

export default Page;
