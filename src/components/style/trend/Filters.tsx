import { FILTER_ITEMS, FilterItem } from "@components/style/trend/FilteredFeeds";

interface FiltersProps {
  filtered: FilterItem;
  onClick: (target: FilterItem) => void;
}

const Filters = ({ filtered, onClick }: FiltersProps) => {
  return (
    <ul className={"flex justify-end items-center pt-6 px-5 pb-6"}>
      {FILTER_ITEMS.map(text => (
        <li
          key={text}
          className={"first:border-r-2 first:border-gray-200 px-4 cursor-pointer"}
          onClick={() => onClick(text)}
        >
          <span className={filtered === text ? "font-semibold text-gray-950" : "font-normal text-gray-500"}>
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
