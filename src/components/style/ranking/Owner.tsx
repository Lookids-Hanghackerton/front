import React from "react";
import Image from "next/image";
import { RankingData } from "@/apis/interfaces/Ranking";

const Owner = ({
  memberProfileUrl,
  memberNickName,
  countFollower,
  idx,
}: Pick<RankingData, "memberNickName" | "memberProfileUrl" | "countFollower"> & { idx: number }) => {
  return (
    <div className={"flex-1 flex justify-between items-center px-3 pb-3"}>
      <div className={"flex items-center gap-2.5  cursor-pointer"}>
        <p className={"font-bold text-sm"}>{idx}</p>
        <div className={"relative w-8 h-8 rounded-full bg-black overflow-hidden"}>
          <Image fill={true} src={memberProfileUrl} alt={"avatar"} />
        </div>
        <div className={"break-all"}>
          <p className={"text-xs font-semibold  leading-3"}>{memberNickName}</p>
          <p className={"text-[11px] text-gray-500 pt-1"}>팔로워 {countFollower}명</p>
        </div>
      </div>
      <div className={"flex items-center"}>
        <button className={"block bg-black h-7 mr-4 px-3 text-xs text-zinc-200 rounded-lg"}>팔로우</button>
      </div>
    </div>
  );
};

export default Owner;
