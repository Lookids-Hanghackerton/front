import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

const Functions = () => {
  return (
    <div className={"flex items-center justify-between py-3"}>
      <div className={"flex gap-4"}>
        <AiOutlineHeart className={"cursor-pointer"} size={"32px"} />
        <BsChat className={"cursor-pointer"} size={"28px"} />
      </div>
      <div>
        <PiShareFatLight className={"cursor-pointer"} size={"28px"} onClick={() => alert("준비중인 기능입니다")} />
      </div>
    </div>
  );
};

export default Functions;
