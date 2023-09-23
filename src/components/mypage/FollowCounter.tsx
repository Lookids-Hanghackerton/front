"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/axios/api";
import { COOKIE_NAME, getCookie } from "@/lib/cookie/cookie";
import Link from "next/link";

const getMyfeeds = async () => {
  const { data } = await api.get(`mypage/${cookie?.memberUniqueId}?sort=latest`);
  return data;
};

const cookie = getCookie(COOKIE_NAME);

const FollowCounter = () => {
  const { data } = useQuery(["data"], () => getMyfeeds());
  console.log(data);

  return (
    <>
      <ul className="flex justify-around items-center flex-1">
        <li>
          <div className="hover:font-bold">
            <Link className="flex flex-col items-center" href={"/mypage"}>
              <span>10</span>
              <span>게시글</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:font-bold">
            <Link className="flex flex-col items-center" href={"/follow?user=user&tab=follower"}>
              <span>20</span>
              <span>팔로워</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:font-bold">
            <Link className="flex flex-col items-center" href={"/follow?user=user&tab=following"}>
              <span>30</span>
              <span>팔로잉</span>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FollowCounter;