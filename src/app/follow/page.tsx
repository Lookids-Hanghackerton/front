import FollowTabs from "@/components/mypage/FollowTabs";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";

const Page = () => {
  const cookie = getCookie(COOKIE_NAME);

  console.log(cookie);
  return (
    <>
      {/* <ProfileHeader text={"UserName"}/> */}
      <FollowTabs />
      <div>팔로워 디테일 보는 곳</div>
    </>
  );
};

export default Page;