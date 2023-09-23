"use client"
import { api } from "@utils/axios/api";
import { useQuery } from "@tanstack/react-query";
import { FilterItem } from "@components/mypage/ProfileFeeds";
import { FeedResponse } from "@/apis/interfaces/MyFeed";
import { getCookie, COOKIE_NAME } from "@/lib/cookie/cookie";

const cookie = getCookie(COOKIE_NAME);
console.log(cookie);
export const getMyFeeds = async (filtered: FilterItem) => {
  const sort = filtered === "최신순" ? "latest" : filtered === "오래된순" ? "oldest" : undefined;
  const { data: feedsList } = await api.get(`mypage/${cookie?.memberUniqueId}?sort=${sort}`);
  return feedsList;
};

export const useGetMyFeeds = ({ filtered, feedsList }: { filtered: FilterItem; feedsList: FeedResponse }) => {
  const { data } = useQuery([`mypage/${filtered}`], () => getMyFeeds(filtered), { initialData: feedsList });

  return data;
};