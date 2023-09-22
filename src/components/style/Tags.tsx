"use client";

import React from "react";
import Image from "next/image";
import useHorizontalDrag from "@hooks/useHorizontalDrag";

const Tags = () => {
  const TagList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const { scrollRef, onDragStart, onDragMove, onDragEnd } = useHorizontalDrag();

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
        {TagList.map((_, idx) => (
          <Tag key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Tags;

const Tag = () => {
  return (
    <li className={"flex-1 flex flex-col justify-center items-center gap-2.5 cursor-pointer"}>
      <div className={"relative w-16 h-16 rounded-full bg-black overflow-hidden"}>
        <Image fill={true} src={"https://source.unsplash.com/random"} alt={"image"} />
      </div>
      <div className={"w-16 text-center break-all text-gray-700 text-sm"}>#웰컴어텀챌린지</div>
    </li>
  );
};
