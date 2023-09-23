
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/mypage/ProfileFeeds";
import { api } from "@utils/axios/api";

export const getMyFeeds = async (filtered: FilterItem, memberUniqueId: string) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "오래된순" ? "oldest" : "";
  console.log(filtered, memberUniqueId);
  const { data: feedsList } = await api.get(`mypage/${memberUniqueId}?sort=${sort}`);
  return feedsList;
};

export const useGetMyFeeds = ({ filtered, memberUniqueId }: { filtered: FilterItem; memberUniqueId: string }) => {
  const { data } = useQuery([`mypage/${filtered}`], () => getMyFeeds(filtered, memberUniqueId), {});

  return { data };
};