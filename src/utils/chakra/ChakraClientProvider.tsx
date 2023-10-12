"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

const ChakraClientProvider = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraClientProvider;
