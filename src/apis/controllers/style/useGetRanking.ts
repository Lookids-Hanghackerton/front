import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";
import { RankingResponse } from "@/apis/interfaces/Ranking";

export const getRanking = async () => {
  const { data: feed } = await api.get(`style/ranking`);
  return feed;
};
export const useGetRanking = ({ feed }: { feed: RankingResponse }): { data: RankingResponse } => {
  const { data } = useQuery([`Ranking`], () => getRanking(), { initialData: feed });
  return { data };
};