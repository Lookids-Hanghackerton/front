"use client";
import { useGetFollowing } from "@/apis/controllers/style/useGetFollowing";

const Following = ({ feeds }: { feeds: any }) => {
  const data = useGetFollowing({ feed: feeds });

  return <div>follow</div>;
};

export default Following;
