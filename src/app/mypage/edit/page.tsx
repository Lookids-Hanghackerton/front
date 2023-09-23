import ProfileHeader from "@/components/mypage/ProfileHeader";
import ProfileEditForm from "@/components/profile/ProfileEditForm";

const ProfileEdit = () => {
  return (
    <>
      <ProfileHeader text={"프로필 편집"} />
      <ProfileEditForm />
    </>
  );
};

export default ProfileEdit;
