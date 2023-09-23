"use client";

import { BsArrowLeft } from "react-icons/bs";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

interface PostHeaderProps {
  center?: ReactNode;
  right?: ReactNode;
}

const postHeader = ({ center, right }: PostHeaderProps) => {
  const router = useRouter();

  const PostFeed = () => {
    const formData = new FormData();
    console.log(formData);
    fetch("http://49.50.161.207:8080", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then(data => {
        console.log("성공:", data);
      })
      .catch(error => {
        console.error("실패:", error);
      });

    router.push("/");
  };

  return (
    <header className={"flex items-center py-5 px-3"}>
      <BsArrowLeft className={"cursor-pointer"} size={28} onClick={() => router.back()} />
      <div className={"flex-1"}>{center}</div>
      <div className={"font-semibold text-lg cursor-pointer"} onClick={PostFeed}>
        {right}
      </div>
    </header>
  );
};

export default postHeader;
