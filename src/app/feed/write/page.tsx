"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Tags from "@/components/style/Tags";
import Content from "@/components/feed/Content";
import ImageUpload from "@/components/feed/ImageUpload";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [productInfo, setProductInfo] = useState({
    productName: "",
    company: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openProductTagModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <ImageUpload />
      <button
        className="text-gray-500 flex justify-center items-center cursor-pointer bg-red-300"
        onClick={openProductTagModal}
      >
        {"상품 태그를 추가해 보세요"}
      </button>
      {isOpenModal && (
        <div className=" bg-black opacity-25 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-6/12 h-1/4 bg-pink-500 ">
            <input
              type="text"
              className="min-w-0 w-10/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-gray-100 rounded-lg "
              placeholder="상품정보를 입력하세요"
            />
            <button
              className="min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-blue-500 rounded-lg"
              onClick={() => setIsOpenModal(!isOpenModal)}
            >
              {"완료 "}
            </button>
          </div>
        </div>
      )}

      <Content />
      <Tags />
    </>
  );
};

export default Page;
