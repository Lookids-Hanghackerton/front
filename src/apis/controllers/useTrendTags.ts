import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { TrendTagResponse } from "@/apis/interfaces/TrendTags";

export const getTrendTags = async () => {
  const { data } = await api.get("style/trend/tags");
  return data;
};

export const useGetTrendTags = ({ tagList }: { tagList: TrendTagResponse }) => {
  const { data } = useQuery(["feed/tags"], () => getTrendTags(), { initialData: tagList });

  return { data };
};