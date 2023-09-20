"use client";
import Image from "next/image";
import Link from "next/link";

const NaverButton = () => {
  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  const state = "STATE_STRING";
  const callbackUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}`;

  return (
    <div id="naver_id_login" className="relative w-full h-full">
      <Link href={callbackUrl} target="_blank" rel="noopener noreferrer">
        <Image src="/images/buttons/naver_btnG_complete.png" alt="네이버 로그인" layout="fill" objectFit="contain" />
      </Link>
    </div>
  );
};

export default NaverButton;
