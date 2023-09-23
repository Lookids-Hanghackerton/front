"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchProductInfo from "@/components/feed/SearchProductInfo";
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

  return (
    <>
      <ImageUpload />
      <SearchProductInfo />
      <Content />
      {/* <ProductTags /> */}
    </>
  );
};

export default Page;
