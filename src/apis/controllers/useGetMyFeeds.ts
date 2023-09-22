import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/mypage/ProfileFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";

export const getMyFeeds = async (filtered: FilterItem) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "오래된순" ? "oldest" : undefined;
  const { data: feedList } = await api.get(`mypage/${memberuniqueid}?sort=${sort}`);
  return feedList;
};

export const useGetMyFeeds = ({ filtered, feedList }: { filtered: FilterItem; feedList: FeedResponse }) => {
  const { data } = useQuery([`feeds/${filtered}`], () => getTrendFeeds(filtered), { initialData: feedList });

  return data;
};