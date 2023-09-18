"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { BsHouseHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";

interface NavItemProps {
  icon: ReactNode;
  text: string;
  href: string;
}

const NAV_ITEMS: NavItemProps[] = [
  {
    icon: <BsHouseHeart size={"37px"} />,
    text: "스타일",
    href: "/",
  },
  {
    icon: <LuSearch size={"37px"} />,
    text: "검색",
    href: "/search",
  },
  {
    icon: <AiOutlineMessage size={"37px"} />,
    text: "DM",
    href: "/dm",
  },
  {
    icon: <CgProfile size={"37px"} />,
    text: "마이페이지",
    href: "/profile",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={"max-w-[768px] w-full bg-gray-100 border-t-gray-200"}>
      <ul className={"flex justify-around px-3"}>
        {NAV_ITEMS.map(({ icon, text, href }) => (
          <NavItem key={href} icon={icon} text={text} href={href} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const NavItem = ({ icon, text, href, pathname }: { pathname: string } & NavItemProps) => {
  return (
    <li>
      <Link className={"flex flex-col items-center gap-2.5 py-2.5 px-4 "} href={href}>
        {icon}
        <span className={"text-sm truncate " + (pathname === href ? "text-black font-bold" : "text-gray-600")}>
          {text}
        </span>
      </Link>
    </li>
  );
};
