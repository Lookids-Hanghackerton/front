"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import ArrowHeader from "@layout/header/ArrowHeader";
import Right from "@/layout/header/Right";
import Feed from "./page";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const PostFeed = () => {
    router.push("/");
  };

  return (
    <>
      <ArrowHeader right={<Right isText={true} text={"등록"} onClick={PostFeed} />} />
      {children}
    </>
  );
};

export default Layout;
