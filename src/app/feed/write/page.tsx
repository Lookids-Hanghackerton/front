"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Tags from "@/components/style/Tags";
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

  // useEffect(() => {
  //   fetch(`http://125.181.213.112:8080/feed/write`)
  //     .then(resp => resp.json())
  //     .then(result => {
  //       setProductInfo(result);
  //     });
  // }, []);

  return (
    <>
      <ImageUpload />
      <SearchProductInfo />
      <Content />
      {/* <Tags /> */}
    </>
  );
};

export default Page;
