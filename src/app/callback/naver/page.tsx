"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LinkToLogin from "../common/LinkToLogin";
import UseAuth from "@/hooks/useAuth";

const Page = () => {
  const searchParams = useSearchParams();
  const useAuth = UseAuth();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return console.log("uri에 code가 없습니다.");

    const params = `code=${code}`;
    useAuth.login({ type: "naver", search: params, code });
  }, []);

  return (
    <div className="flex-col h-screen flex-center bg-n-400">
      <h2 className="text-2xl animate-pulse text-green-500 ">네이버 콜백 페이지</h2>

      <LinkToLogin />
    </div>
  );
};

export default Page;
