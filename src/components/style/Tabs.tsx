"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabProps {
  text: string;
  href: string;
  cursor: string;
}

const TabItems = [
  { text: "트렌드", cursor: "pointer", href: "/style/trend" },
  { text: "랭킹", cursor: "pointer", href: "/style/ranking" },
  {
    text: "팔로우",
    cursor: "auto",
    href: "/style/following",
  },
];
const Tabs = () => {
  return (
    <nav>
      <ul className={"flex border-b border-solid border-gray-100"}>
        {TabItems.map(({ text, href, cursor }) => (
          <Tab key={text} text={text} href={href} cursor={cursor} />
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;

const Tab = ({ text, href, cursor }: TabProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex justify-center items-center flex-1 text-l ${
        cursor === "pointer" ? "cursor-pointer" : "cursor-auto opacity-30"
      }`}
      href={href}
    >
      <li>
        <div className={"relative flex pb-4"}>
          <span className={pathname === href ? "font-semibold" : ""}>{text}</span>
          <div className={pathname === href ? "absolute bottom-0 left-0  w-full h-[2px] bg-gray-900" : ""}></div>
        </div>
      </li>
    </Link>
  );
};
