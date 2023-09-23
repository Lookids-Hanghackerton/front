import FollowTabs from "@/components/mypage/FollowTabs";
import ProfileHeader from "@/components/mypage/ProfileHeader";

const Page = () => {
  return (
    <>
    <ProfileHeader text={"UserName"}/>
    <FollowTabs />
    <div>팔로워 디테일 보는 곳</div>
    </>
  )
}

export default Page;