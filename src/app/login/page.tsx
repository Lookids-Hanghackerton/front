import SectionTitle from "@/components/login/SectionTitle";
import Socials from "@/components/login/Socials";
import React, { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SectionTitle />
      <Socials />
      {children}
    </>
  );
};

export default Page;
