import { getFeed } from "@/apis/controllers/useGetFeed";
import Following from "@components/style/following/Following";
import { getFollowing } from "@/apis/controllers/style/useGetFollowing";

interface PageParams {
  id: number;
}

const Page = async ({ params }: { params: PageParams }) => {
  // 빌드 에러로 인해 코드 내용 주석합니다.
  // const id = 1;

  // const feed = await getFeed(1);

  // const followList = [1, 2, 3];
  // const feeds = getFollowing();

  // console.log(feeds);

  return (
    <div className={"pt-4"}>
      {/* <Following feeds={feeds} /> */}
      {/*{followList.map((_, idx) => (*/}
      {/*  <Feed key={idx} feed={feeds} id={id} />*/}
      {/*))}*/}
    </div>
  );
};

export default Page;
