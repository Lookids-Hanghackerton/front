"use client";

import { getFeed } from "@/apis/controllers/useGetFeed";
import Feed from "@components/feed/Feed";

interface PageParams {
  id: number;
}

const Page = async ({ params }: { params: PageParams }) => {
  const id = params.id;

  const feed = await getFeed(id);

  return <Feed feed={feed} id={id} />;
};

export default Page;
