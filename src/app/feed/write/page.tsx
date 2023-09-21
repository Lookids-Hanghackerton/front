"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlinePlusCircle, AiOutlineCamera } from "react-icons/ai";

const Feed = () => {
  // const pathname = usePathname();

  const [productInfo, setProductInfo] = useState({
    name: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openProductTagModal = () => setIsOpenModal(!isOpenModal);

  const handleProductInfoChange = (e: any) => {
    const { name, value } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  };

  const submitProductInfo = () => {
    setIsOpenModal(!isOpenModal);
  };

  const productModal = () => {};

  return (
    <div>
      <div className="flex justify-end item-center">
        <button className="bg-yellow-500 rounded-full ">등록</button>
      </div>
      <input type="file" accept="image/*" id="file" className="hidden"></input>
      <label htmlFor="file" className=" bg-blue-500  flex justify-center items-center  mx-7 my-7">
        <img className=" w-9/12 h-80 " src="/noimage.gif" alt="noImage"></img>
      </label>

      <p className="text-gray-500 flex justify-center items-center">이미지를 업로드 해주세요 </p>
      <button
        className="text-gray-500 flex justify-center items-center cursor-pointer bg-red-300"
        onClick={openProductTagModal}
      >
        상품 태그를 추가해 보세요
      </button>
      {isOpenModal && (
        <div className=" bg-black opacity-25 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-6/12 h-1/4 bg-pink-400 ">
            <input
              className="min-w-0 w-10/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-gray-100 rounded-lg "
              placeholder="상품정보를 입력하세요"
            />
            <button className="min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-blue-500 rounded-lg">
              완료{" "}
            </button>
          </div>
        </div>
      )}

      {/* <AiOutlinePlusCircle
        size={"37px"}
        className="bg-blue-500 fixed bottom-28 right-16 md:right-24 lg:right-28 rounded-full cursor-pointer "
      ></AiOutlinePlusCircle> */}
    </div>
  );
};

export default Feed;
