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
    const state = searchParams.get("state");
    if (!code || !state) return console.log("uri에 code 또는 state가 없습니다.");

    const params = `code=${code}&state=${state}`;

    useLogin.login({ type: "naver", search: params, code });
  }, []);

  return (
    <div className="flex-col h-screen flex-center bg-n-400">
      <h2 className="text-2xl animate-pulse text-green-500 ">네이버 콜백 페이지</h2>

      <LinkToLogin />
    </div>
  );
};

export default Page;
