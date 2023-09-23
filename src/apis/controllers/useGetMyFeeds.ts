import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/mypage/ProfileFeeds";
import { FeedResponse } from "@/apis/interfaces/MyFeed";

export const getMyFeeds = async (filtered: FilterItem, memberUniqueId: string) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "오래된순" ? "oldest" : undefined;
  const { data: feedsList } = await api.get(`mypage/${memberUniqueId}?sort=${sort}`);
  return feedsList;
};

export const useGetMyFeeds = ({ filtered, feedsList, memberUniqueId }: { filtered: FilterItem; feedsList: FeedResponse; memberUniqueId: string }) => {
  const { data } = useQuery([`mypage/${filtered}`], () => getMyFeeds(filtered, memberUniqueId), { initialData: feedsList });

  return data;
};