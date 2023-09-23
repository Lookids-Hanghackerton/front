import { ReactNode } from "react";
import ArrowHeader from "@/layout/header/ArrowHeader";
import Right from "@/layout/header/Right";
import Center from "@/layout/header/Center";
import ProfileHeader from "@/components/mypage/ProfileHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <ArrowHeader 
        right={<Right isText={false}/>} 
        center={<Center isText={true} 
        text={"UserName"}/>}
      /> */}
      <ProfileHeader />
      <div>{children}</div>
    </>
  );
};

export default Layout;
