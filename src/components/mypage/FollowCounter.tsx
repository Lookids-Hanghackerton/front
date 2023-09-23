"use client";
import Link from "next/link";

const FollowCounter = ({ memberUniqueId, memberNickName }: { memberUniqueId: string; memberNickName: string }) => {
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
            <Link
              className="flex flex-col items-center"
              href={`/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=follower`}
            >
              <span>20</span>
              <span>팔로워</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:font-bold">
            <Link
              className="flex flex-col items-center"
              href={`/follow?memberNickName=${memberNickName}&memberUniqueId=${memberUniqueId}&tab=following`}
            >
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