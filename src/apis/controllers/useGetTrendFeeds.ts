import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/style/trend/FilteredFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";

export const getTrendFeeds = async (filtered: FilterItem) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "인기순" ? "popular" : undefined;
  const { data: feedList } = await api.get(`style/trend/feeds?sort=${sort}&page=0`);
  return feedList;
};

export const useGetTrendFeeds = ({ filtered, feedList }: { filtered: FilterItem; feedList: FeedResponse }) => {
  const { data } = useQuery([`feeds/${filtered}`], () => getTrendFeeds(filtered), { initialData: feedList });

  return data;
};