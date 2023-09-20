"use client";

import Feeds from "@components/style/trend/Feeds";
import Filters from "@components/style/trend/Filters";
import { useState } from "react";

export type FilterItem = (typeof FILTER_ITEMS)[number];

export const FILTER_ITEMS = ["인기순", "최신순"];
const FilteredFeeds = () => {
  const [filtered, setFiltered] = useState<FilterItem>("인기순");
  const filterHandler = (target: FilterItem) => {
    setFiltered(target);
  };
  return (
    <div className={""}>
      <Filters filtered={filtered} onClick={filterHandler} />
      <Feeds />
    </div>
  );
};

export default FilteredFeeds;
