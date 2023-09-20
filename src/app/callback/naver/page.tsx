"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  if (!code || !state) return console.log("uri에 code 또는 state가 없습니다.");

  const apiUrl = process.env.NEXT_PUBLIC_ENPOINT;
  const url = `${apiUrl}/callback/naver?code=${code}&state=${state}`;

  useEffect(() => {
    // POST 요청: callback/naver/
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 요청 헤더에 JSON 데이터를 보내는 것으로 가정합니다.
      },
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
