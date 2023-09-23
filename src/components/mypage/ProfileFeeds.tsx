"use client";

import Filters from "@components/style/trend/Filters";
import { useState } from "react";
import { useGetTrendFeeds } from "@/apis/controllers/useGetTrendFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";
import Feeds from "@components/style/trend/Feeds";
import { useGetFeed } from "@/apis/controllers/useGetFeed";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["인기순", "최신순"];
const FilteredFeeds = ({ feedList }: { feedList: FeedResponse }) => {
  const [filtered, setFiltered] = useState<FilterItem>("인기순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };

  const data = useGetTrendFeeds({ filtered, feedList });

  return (
    <div>
      <Filters filtered={filtered} onClick={filterHandler} />
      <Feeds feeds={data.data.feedsList} />
    </div>
  );
};

export default FilteredFeeds;
