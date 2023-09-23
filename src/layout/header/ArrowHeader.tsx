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
    <header className={"flex items-center py-5 px-3"}>
      <BsArrowLeft className={"cursor-pointer"} size={28} onClick={() => router.back()} />
      <div className={"flex-1"}>{center}</div>
      <div className={"font-semibold text-lg cursor-pointer"}>{right}</div>
    </header>
  );
};

export default ArrowHeader;
