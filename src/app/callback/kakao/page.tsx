"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import LinkToLogin from "../common/LinkToLogin";
import UseLogin from "@/hooks/useSocialLogin";

const Page = () => {
  const searchParams = useSearchParams();
  const useLogin = UseLogin();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return console.log("code가 없습니다.");

    const params = `code=${code}`;
    useLogin.login({ type: "kakao", search: params, code });
  }, []);

  return (
    <div className="flex-col h-screen flex-center bg-n-400">
      <h2 className="text-2xl animate-pulse text-yellow-600">카카오 콜백 페이지</h2>

      <LinkToLogin />
    </div>
  );
};

export default Page;
