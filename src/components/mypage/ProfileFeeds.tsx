"use client";

import ProfileFilters from "./ProfileFilters";
import { useState } from "react";
import { useGetMyFeeds } from "@/apis/controllers/useGetMyFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";
import MyFeeds from "./MyFeeds";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["최신순", "오래된순"];
const ProfileFeeds = ({ feedList }: { feedList: FeedResponse }) => {
  const [filtered, setFiltered] = useState<FilterItem>("최신순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };

  const data = useGetMyFeeds({ filtered, feedList });

  return (
    <div>
      <ProfileFilters filtered={filtered} onClick={filterHandler} />
      <MyFeeds feeds={data.feedList} />
    </div>
  );
};

export default ProfileFeeds;
