import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { userAtom } from "@/states/atom/user.atom";

import { postSocial } from "@/apis/controllers/usePostSocial";
import { PostSocialCode } from "@/apis/interfaces/SocialLogin";

// ----------------------------------
// 유저 소셜 로그인 Hook
// ----------------------------------
const UseLogin = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const router = useRouter();

  /** 소셜 로그인
   * @param {PostSocialCode} params
   * @param {string} params.type "naver" | "kakao"
   * @param {string} params.code 인가 코드
   * @param {string} params.state state값(naver)
   * @param {string} params.search 전체 searchParams
   * @returns 성공 시, 헤더에 access_token, refresh_token을 넣어줍니다.
   */
  const login = async ({ type, code, search }: Pick<PostSocialCode, "type" | "code" | "search">) => {
    let url = `/callback/${type}`;
    if (search) url += `?${search}`;

    const { data, status } = await postSocial({ url, code });
    setUser(data);

    if (status === 200) {
      // router.push("/style/trend");
    }
    if (status === 222) {
      // router.push("/mypage/extra-info");
    }
  };

  // 토큰을 지우고 리디렉션
  const logout = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    setUser(null);
    router.push("/");
  };

  return { login, logout };
};

export default UseLogin;
