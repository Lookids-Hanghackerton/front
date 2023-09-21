"use client";

import React from "react";
import Image from "next/image";
import useHorizontalDrag from "@hooks/useHorizontalDrag";

const ItemTags = () => {
  const TagList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { scrollRef, onDragStart, onDragMove, onDragEnd } = useHorizontalDrag();

  return (
    <div
      className={"pb-3 pt-10 overflow-auto no-scroll border-b border-gray-500 mx-3"}
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseLeave={onDragEnd}
      onMouseUp={onDragEnd}
    >
      <ul className={"inline-flex gap-7"}>
        {TagList.map((_, idx) => (
          <Tag key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default ItemTags;

const Tag = () => {
  return (
    <li className={"flex-1 flex items-center gap-2.5 cursor-pointer"}>
      <div className={"relative w-10 h-10 rounded-full bg-black overflow-hidden"}>
        <Image fill={true} src={"https://source.unsplash.com/random"} alt={"image"} />
      </div>
      <div className={"w-40 break-all"}>
        <p className={"text-[11px] leading-3  text-gray-700"}>Balenciaga 3XL Sneakers Light Beige</p>
        <p className={"text-xs font-semibold pt-1"}>1,350,000</p>
      </div>
    </li>
  );
};
