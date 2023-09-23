"use client";

import ProfileFilters from "./ProfileFilters";
import { useState } from "react";
import { useGetMyFeeds } from "@/apis/controllers/useGetMyFeeds";
import { FeedResponse } from "@/apis/interfaces/MyFeed";
import MyFeeds from "./MyFeeds";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["최신순", "오래된순"];
const ProfileFeeds = ({ feedsList }: { feedsList: FeedResponse }) => {
  const [filtered, setFiltered] = useState<FilterItem>("최신순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };

  const data = useGetMyFeeds({ filtered, feedsList });
  console.log(data.data.feedsList);
  return (
    <div>
      <ProfileFilters filtered={filtered} onClick={filterHandler} />
      {/* {data&&<MyFeeds feeds={data.data.feedsList} />} */}
      <MyFeeds feeds={data.data.feedsList} />
    </div>
  );
};

export default ProfileFeeds;
