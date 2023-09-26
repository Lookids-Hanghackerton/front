import React, { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { selectedResultState } from "../../states/atom/contentValue";

const SearchProductInfo = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [productInfo, setProductInfo] = useState<
    { productsId: number; manufacturesName: string; productsName: string }[]
  >([]);
  const [productTag, setProductTag] = useState("# 상품 태그를 추가해 보세요 ");
  const [input, setInput] = useState("");
  const selectedResult = useRecoilValue(selectedResultState);
  const openProductTagModal = () => setIsOpenModal(!isOpenModal);

  const handleProductChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const inputValue = e.target.value;
    setSearchProduct(inputValue);

    try {
      const response = await fetch(`http://49.50.161.207:8080/product/find/${inputValue}`);
      const data = await response.json();
      console.log(data.data.productsList);
      setProductInfo(data.data.productsList);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // const handleAddProductTag = () => {
  //   onChange={handleAddProductTag}
  // }
  const HandleClickProductInfo = (item: { productsId?: number; manufacturesName: string; productsName: string }) => {
    setIsOpenModal(!isOpenModal);
    setInput("");
    setProductTag(`${item.productsName} / ${item.manufacturesName}`);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="text-gray-500 flex justify-center items-center cursor-pointer "
          onClick={openProductTagModal}
        >
          {productTag}
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
                <ul className="px-4 ">
                  {productInfo &&
                    productInfo.map(item => {
                      return (
                        <li
                          className="cursor-pointer hover:bg-sky-500"
                          onClick={() => HandleClickProductInfo(item)}
                          key={item.productsId}
                        >
                          상품명/회사 : {item.productsName} / {item.manufacturesName}
                        </li>
                      );
                    })}
                </ul>

                {/* <div className="flex justify-center items-center">
                  <button
                    className="min-w-0 w-2/12 mx-8 my-8 p-4 font-medium text-sm outline-0 bg-blue-500 rounded-lg"
                    onClick={handleClickProduct}
                  >
                    {"완료 "}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchProductInfo;
