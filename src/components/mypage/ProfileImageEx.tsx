"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { getCookie,COOKIE_NAME } from "@/lib/cookie/cookie";

const ProfileImageEx = () => {
  const cookie = getCookie(COOKIE_NAME);
  const [image, setImage] = useState('/blank.png');

  return (
    <>
        <Image
          className="rounded-full min-w-24 min-h-24" 
          width={100}
          height={100}
          src={
            cookie?.profileImage ? 
            cookie?.profileImage :
            image} 
          alt="프로필 기본 이미지"
        />
    </>
  )
}

export default ProfileImageEx;