"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabProps {
  text: string;
  href: string;
}

const FollowTabs = ({
  tabItems,
  tabName,
}: {
  tabItems: { text: string; href: string }[];
  tabName: "팔로워" | "팔로잉";
}) => {
  return (
    <nav>
      <ul className={"flex border-b border-solid border-gray-100 pt-5"}>
        {tabItems.map(({ text, href }) => (
          <FollowTab key={text} text={text} href={href} tabName={tabName} />
        ))}
      </ul>
    </nav>
  );
};

export default FollowTabs;

const FollowTab = ({ text, href, tabName }: TabProps & { tabName: "팔로워" | "팔로잉" }) => {
  const pathname = usePathname();

  return (
    <Link className={"flex justify-center items-center flex-1 text-l"} href={href}>
      <li>
        <div className={"relative flex pb-4"}>
          <span className={text === tabName ? "font-semibold" : ""}>{text}</span>
          <div className={text === tabName ? "absolute bottom-0 left-0  w-full h-[2px] bg-gray-900" : ""}></div>
        </div>
      </li>
    </Link>
  );
};
