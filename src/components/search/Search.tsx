"use client";

import ArrowHeader from "@layout/header/ArrowHeader";
import Center from "@layout/header/Center";
import Right from "@layout/header/Right";
import { useGetSearch } from "@/apis/controllers/useGetSearch";
import Image from "next/image";
import Link from "next/link";
import useSearch from "@hooks/useSearch";

const SearchTemplate = () => {
  const { clickHandler, changeHandler, params } = useSearch();

  const data = useGetSearch({ keyword: params.get("keyword") });
  const searchList = data?.data.searchList;

  return (
    <>
      <div>
        <ArrowHeader
          center={<Center isText={false} placeHolder={"검색"} onChange={changeHandler} />}
          right={<Right isText={true} text={"검색"} onClick={clickHandler} />}
        />
      </div>
      <div className={"grid grid-cols-2 sm:grid-cols-3 gap-2 p-2"}>
        {searchList?.map(({ pictures, feedsId }) => (
          <div className={"relative max-h-[200px] cursor-pointer"} key={feedsId}>
            <Link href={`/feed/${feedsId}`}>
              <Image
                width={200}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={pictures[0]}
                alt={"Image"}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchTemplate;