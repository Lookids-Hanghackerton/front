"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Tags from "@/components/style/Tags";
import Content from "@/components/feed/Content";
import ImageUpload from "@/components/feed/ImageUpload";

interface ProductInfo {
  productsId: number;
  productsName: string;
  manufacturesName: string;
  productsImage: string[];
}

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [searchProduct, setSearchProduct] = useState("");
  const [productInfo, setProductInfo] = useState<
    { productsId: number; manufacturesName: string; productsName: string }[]
  >([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openProductTagModal = () => setIsOpenModal(!isOpenModal);

  const handleProductChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const inputValue = e.target.value;
    setSearchProduct(inputValue);

    try {
      const response = await fetch(`http://125.181.213.112:8080/product/find/${inputValue}`);
      const data = await response.json();
      console.log(data.data.productsList);
      setProductInfo(data.data.productsList);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // useEffect(() => {
  //   fetch(`http://125.181.213.112:8080/feed/write`)
  //     .then(resp => resp.json())
  //     .then(result => {
  //       setProductInfo(result);
  //     });
  // }, []);

  const handleClickProduct = () => {
    setIsOpenModal(!isOpenModal);
    setSearchProduct("");
  };

  return (
    <>
      <ImageUpload />
      <button
        className="text-gray-500 flex justify-center items-center cursor-pointer bg-red-300"
        onClick={openProductTagModal}
      >
        {"#상품 태그를 추가해 보세요"}
      </button>
      {isOpenModal && (
        <div>
          <div className=" bg-black  opacity-25 fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-6/12 h-1/4 bg-white ">
              <input
                type="text"
                value={searchProduct}
                className="min-w-0 w-10/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-gray-100 rounded-lg "
                placeholder="상품정보를 입력하세요"
                onChange={handleProductChange}
              />
              <ul>
                {productInfo &&
                  productInfo.map(item => {
                    console.log(item);
                    return (
                      <li key={item.productsId}>
                        상품명/회사 : {item.productsName} / {item.manufacturesName}
                      </li>
                    );
                  })}
              </ul>

              <div className="flex justify-center items-center">
                <button
                  className="min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-blue-500 rounded-lg"
                  onClick={handleClickProduct}
                >
                  {"완료 "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Content />
      <Tags />
    </>
  );
};

export default Page;
