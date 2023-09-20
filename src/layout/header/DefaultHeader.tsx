import { LuSearch } from "react-icons/lu";

const DefaultHeader = () => {
  return (
    <header className={"flex items-center justify-between p-6"}>
      <input
        className={"flex-1 min-w-0 mr-8 p-4 font-medium text-sm outline-0 bg-gray-100 rounded-lg "}
        placeholder={"브랜드, 상품, 프로필, 태그, 등"}
      />
      <LuSearch size={28} className={"cursor-pointer"} />
    </header>
  );
};

export default DefaultHeader;
