import { ReactNode } from "react";
import ArrowHeader from "@/layout/header/ArrowHeader";
import DefaultHeader from "@/layout/header/DefaultHeader";
import Right from "@/layout/header/Right";
import Center from "@/layout/header/Center";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <ArrowHeader right={<Right isText={false}/>} center={<Center isText={true} text={"UserName"}/>}/> */}
      <div>{children}</div>
      <DefaultHeader/>
    </>
  );
};

export default Layout;
