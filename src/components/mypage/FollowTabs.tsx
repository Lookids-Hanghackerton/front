"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabProps {
  text: string;
  href: string;
}

const TabItems = [
  { text: "팔로워", href: "/mypage/follower" },
  { text: "팔로잉", href: "/mypage/following" },
];
const FollowTabs = () => {
  return (
    <nav>
      <ul className={"flex border-b border-solid border-gray-100 pt-5"}>
        {TabItems.map(({ text, href }) => (
          <FollowTab key={text} text={text} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default FollowTabs;

const FollowTab = ({ text, href }: TabProps) => {
  const pathname = usePathname();

  return (
    <Link className={"flex justify-center items-center flex-1 text-l"} href={href}>
      <li>
        <div className={"relative flex pb-4"}>
          <span className={pathname === href ? "font-semibold" : ""}>{text}</span>
          <div className={pathname === href ? "absolute bottom-0 left-0  w-full h-[2px] bg-gray-900" : ""}></div>
        </div>
      </li>
    </Link>
  );
};
