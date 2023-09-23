import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";
import { SearchResponse } from "@/apis/interfaces/Search";

export const getSearch = async (keyword: string | null) => {
  const { data: searchData } = await api.get(`/search?keyword=${keyword}`);
  return searchData;
};

export const useGetSearch = ({ keyword }: { keyword: string | null }): SearchResponse => {
  const { data } = useQuery([`search/${keyword}`], () => getSearch(keyword), {
    enabled: !!keyword,
  });
  return data;
};