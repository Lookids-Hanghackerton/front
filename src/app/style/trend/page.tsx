import Tags from "@/components/style/Tags";
import FilteredFeeds from "@components/style/trend/FilteredFeeds";
import { getTrendFeeds } from "@hooks/style/trend/useGetTrendFeeds";

const Page = async () => {
  const feedList = await getTrendFeeds("인기순");
  return (
    <div>
      <Tags />
      <FilteredFeeds feedList={feedList} />
    </div>
  );
};

export default Page;
