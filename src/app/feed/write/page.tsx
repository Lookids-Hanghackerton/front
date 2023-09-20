import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlinePlusCircle, AiOutlineCamera } from "react-icons/ai";

const Feed = () => {
  // const pathname = usePathname();

  return (
    <div>
      <div className="flex justify-end item-center">
        <button className="bg-yellow-500 rounded-full ">등록</button>
      </div>
      <input type="file" accept="image/*" id="file" className="hidden"></input>
      <label htmlFor="file" className=" bg-blue-500 flex justify-center items-center ">
        <AiOutlineCamera className="bg-red-500 w-9/12 h-80"></AiOutlineCamera>
      </label>
      <p className="text-gray-500 flex justify-center items-center">이미지를 업로드 해주세요</p>

      {/* <AiOutlinePlusCircle
        size={"37px"}
        className="bg-blue-500 fixed bottom-28 right-16 md:right-24 lg:right-28 rounded-full cursor-pointer "
      ></AiOutlinePlusCircle> */}
    </div>
  );
};

export default Feed;
