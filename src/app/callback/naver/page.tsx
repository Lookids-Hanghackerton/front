"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const apiUrl = process.env.NEXT_PUBLIC_ENPOINT;

  useEffect(() => {
    // POST 요청: /naver/callback
    if (!code) return console.log("code가 없습니다.");

    fetch(apiUrl + "/callback/naver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 요청 헤더에 JSON 데이터를 보내는 것으로 가정합니다.
      },
      body: JSON.stringify({ code }), // code 값을 JSON 형식으로 전송
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="h-screen flex-center bg-n-400">
      <h2 className="text-2xl animate-pulse text-primary ">네이버 콜백 페이지</h2>
    </div>
  );
};

export default Page;
