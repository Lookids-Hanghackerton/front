import { getFeed } from "@/apis/controllers/useGetFeed";
import Feed from "@components/feed/Feed";

interface PageParams {
  id: number;
}

const Page = async ({ params }: { params: PageParams }) => {
  const id = 1;

  const feed = await getFeed(1);

  const followList = [1, 2, 3];

  return (
    <div className={"pt-4"}>
      {followList.map((_, idx) => (
        <Feed key={idx} feed={feed} id={id} />
      ))}
    </div>
  );
};

export default Page;
