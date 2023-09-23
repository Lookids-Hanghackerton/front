"use client";
import Image from "next/image";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";

const ProfileImageEx = ({ image }: { image: string }) => {
  const cookie = getCookie(COOKIE_NAME);

  return (
    <>
      <div className={"relative w-24 h-24 overflow-hidden rounded-full"}>
        <Image fill={true} objectFit={"cover"} src={image} alt="프로필 기본 이미지" />
      </div>
    </>
  );
};

export default ProfileImageEx;