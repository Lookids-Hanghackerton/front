"use client";

import { useGetRanking } from "@/apis/controllers/style/useGetRanking";
import React from "react";
import { RankingResponse } from "@/apis/interfaces/Ranking";
import Owner from "@components/style/ranking/Owner";
import ImageSlide from "@components/style/ranking/ImageSlide";

const Ranking = ({ feeds }: { feeds: RankingResponse }) => {
  const { data: rankingList } = useGetRanking({ feed: feeds });

  return (
    <div>
      {rankingList.data.map(({ memberNickName, countFollower, memberProfileUrl, feedsList }, idx) => (
        <div key={memberNickName} className={"border-b border-zinc-200 py-2"}>
          <Owner
            idx={idx}
            memberNickName={memberNickName}
            countFollower={countFollower}
            memberProfileUrl={memberProfileUrl}
          />

          {feedsList.length > 1 && <ImageSlide feedsList={feedsList} />}
        </div>
      ))}
    </div>
  );
};

export default Ranking;
