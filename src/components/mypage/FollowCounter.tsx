"use client"

const FollowCounter = () => {
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