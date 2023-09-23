"use client";

import { BsArrowLeft } from "react-icons/bs";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ArrowHeaderProps {
  center?: ReactNode;
  right?: ReactNode;
}

const ArrowHeader = ({ center, right }: ArrowHeaderProps) => {
  const router = useRouter();
  return (
    <header className={"flex items-center py-6 px-8"}>
      <BsArrowLeft className={"cursor-pointer"} size={28} onClick={() => router.back()} />
      <div className={"flex-1 pl-4 pr-6"}>{center}</div>
      <div className={"font-semibold text-lg cursor-pointer"}>{right}</div>
    </header>
  );
};

export default ArrowHeader;
