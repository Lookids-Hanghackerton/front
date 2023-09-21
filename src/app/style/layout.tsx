import { ReactNode } from "react";
import Tabs from "@/components/style/Tabs";
import DefaultHeader from "@layout/header/DefaultHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DefaultHeader />
      <Tabs />
      <>{children}</>
    </>
  );
};

export default Layout;
