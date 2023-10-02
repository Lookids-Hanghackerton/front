import DM from "@/components/dm/DM";
import { Cookie } from "@/interfaces/Cookie";
import { cookies } from "next/headers";
import { getTrendFeeds } from "@/apis/controllers/style/useGetTrendFeeds";

const Page = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.getAll().map(cookie => JSON.parse(cookie.value))[0] as Cookie;

  const feedList = await getTrendFeeds("인기순", 0);

  return (
    <div>
      <DM feedList={feedList} profileImage={cookie.profileImage} memberNickName={cookie.memberNickName} />
    </div>
  );
};

export default Page;
