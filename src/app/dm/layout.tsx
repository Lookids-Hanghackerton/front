import { ReactNode } from "react";
import DefaultHeader from "@layout/header/DefaultHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DefaultHeader />
      <div>{children}</div>
    </>
  );
};

export default Layout;
