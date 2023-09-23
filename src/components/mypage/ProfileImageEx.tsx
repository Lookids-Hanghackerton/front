"use client";
import Image from "next/image";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";

const ProfileImageEx = ({ image }: { image: string }) => {
  const cookie = getCookie(COOKIE_NAME);

  return (
    <>
      <div className={"ml-4 mt-4 relative w-32 h-32 overflow-hidden rounded-full"}>
        <Image fill={true} objectFit={"cover"} src={image} alt="프로필 기본 이미지" />
      </div>
    </>
  );
};

export default ProfileImageEx;
