"use client";
import Image from "next/image";
import Link from "next/link";

const KakaoButton = () => {
  const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const callbackUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

  return (
    <div id="naver_id_login" className="relative w-full h-full">
      <Link href={callbackUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/buttons/login/kakao_login_large_narrow.png"
          alt="카카오 로그인"
          layout="fill"
          objectFit="contain"
        />
      </Link>
    </div>
  );
};

export default KakaoButton;
