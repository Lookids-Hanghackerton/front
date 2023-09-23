"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabProps {
  text: string;
  href: string;
}

const TabItems = [
  // { text: "피드", href: `/mypage/{236bcfe1-73f1-47ee-ab4c-86916778af22}` },
  { text: "피드", href: "/mypage" },
  { text: "보관함", href: "/mypage/store" },
];
const FeedsTabs = () => {
  return (
    <nav>
      <ul className={"flex border-b border-solid border-gray-100 pt-5"}>
        {TabItems.map(({ text, href }) => (
          <FeedsTab key={text} text={text} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default FeedsTabs;

const FeedsTab = ({ text, href }: TabProps) => {
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
