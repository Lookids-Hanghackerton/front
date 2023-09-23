"use client";

import React from "react";
import Image from "next/image";
import useHorizontalDrag from "@hooks/useHorizontalDrag";
import { useGetTrendTags } from "@/apis/controllers/useTrendTags";

const ProductTags = ({ tagList }: { tagList: any }) => {
  const { scrollRef, onDragStart, onDragMove, onDragEnd } = useHorizontalDrag();

  const { data } = useGetTrendTags({ tagList });
  const tags = data.data;
  return (
    <div
      className={"w-full pt-4 pb-2 overflow-auto no-scroll"}
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseLeave={onDragEnd}
      onMouseUp={onDragEnd}
    >
      <ul className={"inline-flex px-3 gap-7"}>
        {tags.map((tag: string, idx: number) => (
          <Tag key={idx} tag={tag} />
        ))}
      </ul>
    </div>
  );
};

export default ProductTags;

const Tag = ({ tag }: { tag: string }) => {
  return (
    <li className={"flex-1 flex flex-col justify-start items-center gap-2.5 cursor-pointer"}>
      <div className={"relative w-16 h-16 rounded-full bg-black overflow-hidden"}>
        <Image fill={true} src={"https://source.unsplash.com/random"} alt={"image"} />
      </div>
      <div className={"w-16 text-center break-all text-gray-700 text-sm"}>#{tag}</div>
    </li>
  );
};
