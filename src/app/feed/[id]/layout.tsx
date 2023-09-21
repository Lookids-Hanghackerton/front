"use client";

import { ReactNode } from "react";
import ArrowHeader from "@layout/header/ArrowHeader";
import Center from "@layout/header/Center";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ArrowHeader center={<Center isText={true} text={"게시글"} />} />
      {children}
    </>
  );
};

export default Layout;
