"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface TabProps {
  text: string;
  href: string;
}

const TabItems = [
  { text: "내 프로필", href: "/mypage" },
  { text: "내 포인트 사용하기", href: "/mypage/point" },
];

const ProfileTabs = () => {
  return (
    <nav>
      <ul className={"flex border-b border-solid border-gray-100"}>
        {TabItems.map(({ text, href }) => (
          <ProfileTab key={text} text={text} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default ProfileTabs;

const ProfileTab = ({ text, href }: TabProps) => {
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
