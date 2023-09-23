import { ReactNode } from "react";
import ArrowHeader from "@/layout/header/ArrowHeader";
import Center from "@/layout/header/Center";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ArrowHeader center={<Center isText={true} text={"사용자명"} />} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
