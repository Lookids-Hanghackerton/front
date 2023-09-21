"use client";

import ImageCarousel from "@components/feed/ImageCarousel";
import ItemTags from "@components/feed/ItemTags";
import Functions from "@components/feed/Functions";
import Counts from "@components/feed/Counts";
import Contents from "@components/feed/Contents";
import Owner from "@components/feed/Owner";
import { useGetFeed } from "@/apis/controllers/useGetFeed";
import { FeedDetail } from "@/apis/interfaces/Feeds";

interface PageParams {
  id: number;
}

const Page = ({ params }: { params: PageParams }) => {
  const id = params.id;

  const feed: FeedDetail = useGetFeed({ feedId: id });

  console.log(feed);

  return (
    <div>
      <Owner />
      <ImageCarousel />
      <ItemTags />
      <div className={"px-3"}>
        <Functions />
        <Counts />
        <Contents />
      </div>
    </div>
  );
};

export default Page;
