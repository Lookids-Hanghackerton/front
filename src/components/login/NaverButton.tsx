"use client";
import SocialLoginButton from "./SocialLoginButton";

const NaverButton = () => {
  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  const state = "STATE_STRING";

  const NAVER_CONFIG = {
    id: "naver_id_login",
    callbackUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}`,
    imageUrl: "/images/buttons/naver_btnG_complete.png",
    alt: "네이버 로그인",
  };

  return <SocialLoginButton {...NAVER_CONFIG} />;
};

export default NaverButton;
