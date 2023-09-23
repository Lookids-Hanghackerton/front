import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axios/api";
import { FollowResponse } from "@/apis/interfaces/Follow";

export const getUserFollowList = async ({ type, id }: { type: "following" | "follower"; id: string }) => {
  const { data: feed } = await api.get(`${type}/${id}`);
  return feed;
};
export const useGetUserFollowList = ({
  type,
  id,
  initialData,
}: {
  type: "following" | "follower";
  id: string;
  initialData: FollowResponse;
}) => {
  const { data } = useQuery([`follow/${type}/${id}`], () => getUserFollowList({ type, id }), {
    initialData: initialData,
  });
  return { data };
};