"use client";

import ArrowHeader from "@layout/header/ArrowHeader";
import Center from "@layout/header/Center";
import FollowTabs from "@components/mypage/FollowTabs";
import { useSearchParams } from "next/navigation";
import { FollowData, FollowResponse } from "@/apis/interfaces/Follow";
import { useGetUserFollowList } from "@/apis/controllers/useUserFollowList";
import Image from "next/image";

const Follow = ({ initialData }: { initialData: FollowResponse }) => {
  const params = useSearchParams();
  const memberNickName = params.get("memberNickName");
  const tab = params.get("tab") as "following" | "follower";
  const memberUniqueId = params.get("memberUniqueId") as string;
  const tabName = tab === "follower" ? "팔로워" : "팔로잉";
  const tabItems = [
    { text: "팔로워", href: `/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=follower` },
    { text: "팔로잉", href: `/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=following` },
  ];

  const { data } = useGetUserFollowList({ type: tab, id: memberUniqueId, initialData });

  const followingList: FollowData[] = data.data;

  return (
    <>
      <ArrowHeader center={<Center isText={true} text={`${memberNickName}님의 ${tabName}`} />} />
      <FollowTabs tabItems={tabItems} tabName={tabName} />
      <div className={"p-3"}>
        {followingList.map(follow => (
          <div className={"flex items-center border-b border-zinc-100 py-2"} key={follow.memberNickName}>
            <div className={"flex flex-1 items-center"}>
              <div className={"relative bg-black w-10 h-10 rounded-full overflow-hidden"}>
                <Image fill={true} objectFit={"cover"} src={follow.profileImage} alt={"avatar"} />
              </div>
              <div className={"pl-3 font-medium text-sm"}>{follow.memberNickName}</div>
            </div>
            <div>
              <button className={"px-3 py-1 bg-blue-500 text-zinc-100 rounded-lg text-sm"}>
                {tab === "follower" ? "팔로우" : "삭제"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Follow;
