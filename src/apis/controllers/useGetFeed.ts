import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";
import { FeedDetail } from "@/apis/interfaces/Feeds";

export const getFeed = async (feedId: number) => {
  const { data: feed } = await api.get(`feed/${feedId}`);
  return feed;
};
export const useGetFeed = ({ feedId, feed }: { feedId: number; feed: FeedDetail }) => {
  const { data } = useQuery([`feed/${feedId}`], () => getFeed(feedId), { initialData: feed });
  return data;
};