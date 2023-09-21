import ProfileFeeds from "@/components/profile/ProfileFeeds";


const Page = () => {
  return(
    <>
      <div className="flex justify-center gap-5">
        <div>내 프로필</div>
        <div>내 포인트 사용하기</div>
      </div>
      <div className="flex">
        <div>
          프로필 이미지
        </div>
        <div>
          게시글 팔로워 팔로잉
        </div>
      </div>
      <div>
        <div>
          소개글
        </div>
      </div>
      <div className="flex justify-center gap-5 px-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
          프로필 편집
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
          프로필 공유
        </button>
      </div>
      <div className="flex justify-center pt-5 gap-5">
        <div>피드</div>
        <div>보관함</div>
      </div>
      <ProfileFeeds />
    </>
  );
};

export default Page;
