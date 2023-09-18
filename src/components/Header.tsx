import React from "react";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <div className={"flex items-center justify-between p-6"}>
      <input
        className={"flex-1 mr-11 p-4 font-medium outline-0 bg-gray-100 rounded-lg"}
        placeholder={"브랜드, 상품, 프로필, 태그, 등"}
      />
      <LuSearch size={37} />
    </div>
  );
};

export default Header;
