import Tags from "@/components/style/Tags";
import FilteredFeeds from "@components/style/trend/FilteredFeeds";
import { getTrendFeeds } from "@/apis/controllers/style/useGetTrendFeeds";
import { getTrendTags } from "@/apis/controllers/style/useTrendTags";

const Page = async () => {
  const feedList = await getTrendFeeds("인기순", 0);
  const tagList = await getTrendTags();

  return (
    <div>
      <Tags tagList={tagList} feedList={feedList} />
      <FilteredFeeds feedList={feedList} />
    </div>
  );
};

export default Page;
