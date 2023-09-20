import { ReactNode } from "react";
import DefaultHeader from "@layout/header/DefaultHeader";
import ArrowHeader from "@/layout/header/ArrowHeader";
import Right from "@/layout/header/Right";
import Center from "@/layout/header/Center";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <DefaultHeader /> */}
      <ArrowHeader right={<Right isText={false}/>} center={<Center isText={true} text={"dddd"}/>}/>
      <div>{children}</div>
    </>
  );
};

export default Layout;
