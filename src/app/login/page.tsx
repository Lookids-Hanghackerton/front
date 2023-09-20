import Socials from "@/components/login/Socials";
import React, { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Socials />
      {children}
    </>
  );
};

export default Page;
