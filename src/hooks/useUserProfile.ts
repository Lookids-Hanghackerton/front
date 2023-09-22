import { useRecoilState } from "recoil";
import { userAtom } from "@/states/atom/user.atom";

import { getMemberInfo } from "@/apis/controllers/useUserProfile";

// ----------------------------------
// 유저 프로필 관련 Hook
// ----------------------------------
const UseUserProfile = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const checkExtraInfo = async () => {
    if (!user) return console.log("로그인이 필요합니다.");
    const { data } = await getMemberInfo(user.memberUniqueId);
    console.log(data);
  };

  return { checkExtraInfo };
};

export default UseUserProfile;
