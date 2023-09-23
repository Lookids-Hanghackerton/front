"use client";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

const FollowCounter = ({ memberUniqueId, memberNickName }: { memberUniqueId: string; memberNickName: string }) => {
  return (
    <>
      <ul className="flex justify-around items-center flex-1 ">
        <li>
          <div className="hover:font-bold">
            <Link className="flex flex-col items-center" href={"/mypage"}>
              <Text fontSize={30}>10</Text>
              <Text fontSize={18}>게시글</Text>
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:font-bold">
            <Link
              className="flex flex-col items-center"
              href={`/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=follower`}
            >
              <Text fontSize={30}>20</Text>
              <Text fontSize={18}>팔로워</Text>
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:font-bold">
            <Link
              className="flex flex-col items-center"
              href={`/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=following`}
            >
              <Text fontSize={30}>32</Text>
              <Text fontSize={18}>팔로잉</Text>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FollowCounter;
