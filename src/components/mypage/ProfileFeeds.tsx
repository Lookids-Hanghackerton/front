"use client";

import Filters from "@components/style/trend/Filters";
import { useState } from "react";
import { useGetTrendFeeds } from "@/apis/controllers/useGetTrendFeeds";
import { useGetMyFeeds } from "@/apis/controllers/useGetMyFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";
import Feeds from "@components/style/trend/Feeds";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["최신순", "오래된순"];
const ProfileFeeds = ({ feedList }: { feedList: FeedResponse }) => {
  const [filtered, setFiltered] = useState<FilterItem>("최신순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };

  const data = useGetMyFeeds({ filtered, feedList, memberUniqueId });

  return (
    <div>
      <Filters filtered={filtered} onClick={filterHandler} />
      <Feeds feeds={data.data.feedsList} />
    </div>
  );
};

export default ProfileFeeds;
