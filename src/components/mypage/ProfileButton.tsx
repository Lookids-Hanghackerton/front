"use client";

import Link from "next/link";

const ProfileButton = () => {
  return (
    <>
      <div className="flex justify-center gap-5 px-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
          <Link href={"/mypage/edit"}>프로필 편집</Link>
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">프로필 공유</button>
      </div>
    </>
  );
};

export default ProfileButton;