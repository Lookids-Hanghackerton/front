"use client"

const ProfileButton = () => {
  return (
    <>
      <div className="flex justify-center gap-5 px-10">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded"
          >
          프로필 편집
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded"
          >
          프로필 공유
        </button>
      </div>
    </>
  )
}

export default ProfileButton;