"use client";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import HamburgerDropdown from "./HamburgerDropdown";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";

const ProfileHeader = ({ text }: { text: string }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const cookie = getCookie(COOKIE_NAME);

  return (
    <>
      <header className={"flex items-center py-5 px-10"}>
        <BsArrowLeft className={"cursor-pointer"} size={28} onClick={() => router.back()} />
        <div className={"flex-1 pl-6"}>
          <p className={"text-xl font-semibold"}>{text}</p>
        </div>
        <RxHamburgerMenu className={"font-semibold text-lg cursor-pointer"} size={28} onClick={() => setOpen(!open)}>
          <HamburgerDropdown />
        </RxHamburgerMenu>
      </header>
    </>
  );
};

export default ProfileHeader;
