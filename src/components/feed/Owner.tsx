import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FeedDetailData } from "@/apis/interfaces/Feeds";

const Owner = ({ member }: Pick<FeedDetailData, "member">) => {
  return (
    <div className={"flex-1 flex justify-between items-center px-3 pb-3"}>
      <div className={"flex items-center gap-2.5  cursor-pointer"}>
        <div className={"relative w-8 h-8 rounded-full bg-black overflow-hidden"}>
          <Image fill={true} src={member.profileImage} alt={"avatar"} />
        </div>
        <div className={"break-all"}>
          <p className={"text-xs font-semibold  leading-3"}>{member.memberNickName}</p>
          <p className={"text-[11px] text-gray-500 pt-1"}>{member.createdAt}</p>
        </div>
      </div>
      <div className={"flex items-center"}>
        <button className={"block bg-black h-7 mr-4 px-3 text-xs text-zinc-200 rounded-lg"}>팔로우</button>
        <BiDotsVerticalRounded size={24} />
      </div>
    </div>
  );
};

export default Owner;
