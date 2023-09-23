"use client";

import Filters from "@components/style/trend/Filters";
import { useEffect, useRef, useState } from "react";
import { useInfiniteFeeds } from "@/apis/controllers/style/useGetTrendFeeds";
import { FeedResponse } from "@/apis/interfaces/Feeds";
import Feeds from "@components/style/trend/Feeds";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["인기순", "최신순"];
const FilteredFeeds = ({ feedList }: { feedList: FeedResponse }) => {
  const [filtered, setFiltered] = useState<FilterItem>("인기순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };

  // const data = useGetTrendFeeds({ filtered, feedList });
  const observerRef = useRef<HTMLSpanElement>(null);
  const { data: data, fetchNextPage, isFetchingNextPage } = useInfiniteFeeds({ filtered, feedList });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => fetchNextPage());
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observerRef]);

  return (
    <div>
      <Filters filtered={filtered} onClick={filterHandler} />
      {data?.pages.map((page, idx) => (
        <div key={idx}>
          <Feeds feeds={page.data.feedsList} />
        </div>
      ))}
      <span ref={observerRef}></span>
    </div>
  );
};

export default FilteredFeeds;
