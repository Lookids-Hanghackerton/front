import { ReactNode } from "react";
import DefaultHeader from "@layout/header/DefaultHeader";
import ArrowHeader from "@/layout/header/ArrowHeader";
import Center from "@/layout/header/Center";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ArrowHeader center={<Center isText={true} text={"게시글"} />} />

      <div>{children}</div>
    </>
  );
};

export default Layout;
