import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";

export const getFeed = async (feedId: number) => {
  const { data: feed } = await api.get(`feed/${feedId}`);
  return feed;
};
export const useGetFeed = ({ feedId }: { feedId: number }) => {
  const { data } = useQuery([`feed/${feedId}`], () => getFeed(feedId));
  return data;
};