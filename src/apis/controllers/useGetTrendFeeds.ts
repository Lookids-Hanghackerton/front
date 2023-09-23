import { api } from "@utils/axios/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/style/trend/FilteredFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";

export const getTrendFeeds = async (filtered: FilterItem, page: number) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "인기순" ? "popular" : undefined;
  const { data: feedList } = await api.get(`style/trend/feeds?sort=${sort}&page=${page}`);
  return feedList;
};

export const useGetTrendFeeds = ({ filtered, feedList }: { filtered: FilterItem; feedList: FeedResponse }) => {
  const { data } = useQuery([`feeds/${filtered}`], () => getTrendFeeds(filtered, 0), {
    initialData: feedList,
  });
  return data;
};

export const useInfiniteFeeds = ({ filtered, feedList }: { filtered: FilterItem; feedList: FeedResponse }) => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    [`trend/feed/${filtered}`],
    ({ pageParam = 0 }) => getTrendFeeds(filtered, pageParam),
    {
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
      initialData: { pages: [feedList], pageParams: [0] },
    },
  );

  return { data, fetchNextPage, isFetchingNextPage };
};