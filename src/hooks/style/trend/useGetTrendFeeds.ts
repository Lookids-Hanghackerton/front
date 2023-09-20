import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/style/trend/FilteredFeeds";

const getTrendFeeds = async (filtered: FilterItem) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "인기순" ? "popular" : undefined;
  const { data } = await api.get(`style/trend/feeds?sort=${sort}&page=0`);

  return data;
};

export const useGetTrendFeeds = (filtered: FilterItem) => {
  const { data } = useQuery([`feeds/${filtered}`], () => getTrendFeeds(filtered));

  return data;
};