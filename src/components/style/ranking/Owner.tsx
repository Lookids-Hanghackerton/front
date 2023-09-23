import React from "react";
import Image from "next/image";
import { RankingData } from "@/apis/interfaces/Ranking";
import { Text } from "@chakra-ui/react";

const Owner = ({
  memberProfileUrl,
  memberNickName,
  countFollower,
  idx,
}: Pick<RankingData, "memberNickName" | "memberProfileUrl" | "countFollower"> & { idx: number }) => {
  return (
    <div className={"flex-1 flex justify-between items-center pb-3 px-4"}>
      <div className={"flex items-center gap-2.5 cursor-pointer"}>
        <Text className={"font-bold text-lg"} fontSize={"xl"} color="GrayText">
          {idx + 1}
        </Text>
        <div className={"relative w-8 h-8 rounded-full bg-black overflow-hidden"}>
          <Image fill={true} src={memberProfileUrl} alt={"avatar"} />
        </div>
        <div className={"break-all"}>
          <Text className={"text-xs font-semibold leading-3"} fontSize={"lg"}>
            {memberNickName}
          </Text>
          <Text className={"text-[11px] text-gray-500 pt-1"} fontSize={"sm"}>
            팔로워 {countFollower}명
          </Text>
        </div>
      </div>
      <div className={"flex items-center "}>
        <button className={"block bg-black h-7 px-3 text-xs text-zinc-200 rounded-lg"}>팔로우</button>
      </div>
    </div>
  );
};

export default Owner;
