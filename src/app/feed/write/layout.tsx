import { ReactNode } from "react";
import PostHeader from "@/layout/header/PostHeader";
import Post from "@/layout/header/Post";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PostHeader right={<Post isText={true} text={"등록"} />} />
      {children}
    </>
  );
};

export default Layout;
