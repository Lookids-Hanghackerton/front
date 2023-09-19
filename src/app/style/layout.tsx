import { ReactNode } from "react";
import Tabs from "@/components/style/Tabs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Tabs />
      <div>{children}</div>
    </>
  );
};

export default Layout;
