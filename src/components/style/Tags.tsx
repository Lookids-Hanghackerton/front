"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const Tags = () => {
  const TagList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const scrollRef = useRef<any>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrag) {
      console.log(e);
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  /**
   * onDragMove의 이벤트가 많이 일어나서 throttling이 필요하다면 활성화 해야할듯?
   */
  // const throttle = (func: (e: React.MouseEvent<HTMLDivElement>) => void, ms: number) => {
  //   let throttled = false;
  //   return (e: React.MouseEvent<HTMLDivElement>) => {
  //     if (!throttled) {
  //       throttled = true;
  //       setTimeout(() => {
  //         func(e);
  //         throttled = false;
  //       }, ms);
  //     }
  //   };
  // };
  // const onThrottleDragMove = throttle(onDragMove, 100);

  return (
    <div
      className={"w-full py-6 overflow-auto no-scroll"}
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseLeave={onDragEnd}
      onMouseUp={onDragEnd}
    >
      <ul className={"inline-flex px-12 gap-7"}>
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
      <div className={"w-28 h-28 rounded-full bg-black overflow-hidden"}>
        <Image width={112} height={112} src={"https://source.unsplash.com/random"} alt={"image"} />
      </div>
      <div className={"w-28 text-center break-all text-gray-700"}>#웰컴어텀챌린지</div>
    </li>
  );
};
