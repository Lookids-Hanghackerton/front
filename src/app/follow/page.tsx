import Follow from "@components/follow/Follow";
import { getUserFollowList } from "@/apis/controllers/useUserFollowList";

const Page = async ({
  searchParams,
}: {
  searchParams: { tab: "following" | "follower"; memberNickName: string; memberUniqueId: string };
}) => {
  const initialData = await getUserFollowList({ type: searchParams.tab, id: searchParams.memberUniqueId });

  return (
    <>
      <Follow initialData={initialData} />
    </>
  );
};

export default Page;