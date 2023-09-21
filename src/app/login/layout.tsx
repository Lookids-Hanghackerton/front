import { ReactNode } from "react";
import DefaultHeader from "@layout/header/DefaultHeader";
import ArrowHeader from "@/layout/header/ArrowHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ArrowHeader />

      <div className="flex-1 flex-col flex-center">{children}</div>
    </>
  );
};

export default Layout;
