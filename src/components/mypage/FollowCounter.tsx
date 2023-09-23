"use client"
import { useQuery } from "@tanstack/react-query";
import { Info } from "@/apis/interfaces/MyPage";
import { api } from "@/utils/axios/api";

const getMyfeeds = async (memberUniqueId: string) => {
  const { data } = await api.get("mypage/236bcfe1-73f1-47ee-ab4c-86916778af22?sort=latest");
  return data;
}

const FollowCounter = ({memberUniqueId}: Info) => {
  const {data} = useQuery(["memberUniqueId"], () => getMyfeeds(memberUniqueId));
  console.log(data);  
  return (
    <>
      <ul className="flex justify-around items-center w-full">
        <li>
          <div className="flex flex-col items-center">
            <span>10</span>
            <span>게시글</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <span>20</span>
            <span>팔로워</span>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <span>30</span>
            <span>팔로잉</span>
          </div>
        </li>
      </ul>
      
    </>
  )
}

export default FollowCounter;