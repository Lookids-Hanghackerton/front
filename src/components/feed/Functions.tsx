import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsChat } from "react-icons/bs";

const Functions = () => {
  return (
    <div className={"flex items-center justify-between py-3"}>
      <div className={"flex gap-4"}>
        <AiOutlineHeart className={"cursor-pointer"} size={"32px"} />
        <BsChat className={"cursor-pointer"} size={"28px"} />
      </div>
      <div>
        <BsBookmark className={"cursor-pointer"} size={"28px"} />
      </div>
    </div>
  );
};

export default Functions;
