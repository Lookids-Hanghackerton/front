import "../styles/input.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/layout/Header";
import Navbar from "@/layout/Navbar";

export const metadata: Metadata = {
  title: "Lookids",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={"flex flex-col w-full max-h-screen h-screen bg-gray-50"}>
          <div className={"flex flex-col flex-1 max-w-[767px] w-full m-auto shadow overflow-auto"}>
            <div className={"flex-1 bg-white overflow-auto no-scroll "}>
              <Header />
              {children}
            </div>
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
