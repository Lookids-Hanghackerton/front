"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { postSocialCode } from "@/apis/controllers/useSocialLogin";

import LinkToLogin from "../common/LinkToLogin";

const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return console.log("code가 없습니다.");

    const params = `code=${code}`;

    postSocialCode({ type: "kakao", search: params, code });
  }, []);

  return (
    <div className="flex-col h-screen flex-center bg-n-400">
      <h2 className="text-2xl animate-pulse text-yellow-600">카카오 콜백 페이지</h2>

      <LinkToLogin />
    </div>
  );
};

export default Page;
