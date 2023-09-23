import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";
import { FeedDetail } from "@/apis/interfaces/Feeds";

export const getFollowing = async () => {
  const { data: feed } = await api.get(`style/following`);
  return feed;
};
export const useGetFollowing = ({ feed }: { feed: FeedDetail }) => {
  const { data } = useQuery([`Ranking`], () => getFollowing(), { initialData: feed });
  return data;
};