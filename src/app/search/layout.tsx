import { ReactNode } from "react";
import ArrowHeader from "@layout/header/ArrowHeader";
import Center from "@layout/header/Center";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <>{children}</>
    </>
  );
};

export default Layout;
