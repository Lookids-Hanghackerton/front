"use client";
import SocialLoginButton from "./SocialLoginButton";

const KakaoButton = () => {
  const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

  const KAKAO_CONFIG = {
    id: "kakao_id_login",
    callbackUrl: `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`,
    imageUrl: "/images/buttons/login/kakao_login_large_narrow.png",
    alt: "카카오 로그인",
  };

  return <SocialLoginButton {...KAKAO_CONFIG} />;
};

export default KakaoButton;
