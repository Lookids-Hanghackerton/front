import "../styles/input.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import RecoilProvider from "./RecoilProvider";
import ChakraClientProvider from "@/utils/chakra/ChakraClientProvider";
import ReactQueryProvider from "@/utils/react-query/ReactQueryProvider";

import Navbar from "@/layout/Navbar";

export const metadata: Metadata = {
  title: "ㅋㅋㅈ Kikids",
  description: "아동 패션 소셜 네트워크 서비스",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <RecoilProvider>
            <ChakraClientProvider>
              <div className={"flex flex-col w-full max-h-screen h-screen bg-gray-50"}>
                <div className={"flex flex-col flex-1 max-w-[767px] w-full m-auto shadow overflow-auto"}>
                  <div className={"flex flex-col flex-1 bg-white overflow-auto no-scroll "}>{children}</div>
                  <Navbar />
                </div>
              </div>
            </ChakraClientProvider>
          </RecoilProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
