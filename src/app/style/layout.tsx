import { ReactNode } from "react";
import Tabs from "@/components/style/Tabs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Tabs />
      <div className={"px-3"}>{children}</div>
    </>
  );
};

export default Layout;
