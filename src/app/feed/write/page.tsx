"use client";

import React, { ReactNode, useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { inputValueState } from "@/states/atom/contentValue";

import { AiOutlinePlusCircle, AiOutlineCamera } from "react-icons/ai";
import { CgLaptop } from "react-icons/cg";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [productInfo, setProductInfo] = useState({
    name: "",
  });
  const [content, setContent] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputValue, setInputValue] = useRecoilState(inputValueState);

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

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = e.target.content.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    };
    fetch(`http://125.181.213.112:8080/feed/write`, options)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // const lastId = result.id;
        // router.push(`/styles/${lastId}`);
      });
    setContent("");
  };

  return (
    <div>
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
      <p></p>

      {isOpenModal && (
        <div className=" bg-black opacity-25 fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-6/12 h-1/4 bg-pink-500 ">
            <input
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

      <div className="bg-gray-500 w-full h-96 ">
        <form className="w-full h-96 flex justify-center items-center" onSubmit={handleSubmit}>
          <input
            name="content"
            className="border border-gray-300 p-2 rounded-md w-8/12 h-96 "
            type="text"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={handleContentChange}
          ></input>
          <label
            htmlFor="submit"
            className=" bg-yellow-500 min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm rounded-lg "
          >
            <input
              id="submit"
              type="submit"
              className="hidden min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-blue-500 rounded-lg"
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Page;
