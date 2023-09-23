import { useRouter } from "next/navigation";
import { api } from "@/utils/axios/api";
import UseUserQuery, { AUTH_API } from "./useUser";

import { deleteCookie, setCookie } from "@/lib/cookie/cookie";
import { PostSocialCode } from "@/apis/interfaces/SocialLogin";
import { postSocial } from "@/apis/controllers/usePostSocial";
import { UserAtom } from "@/states/atom/user.atom";

type LoginPayload = Pick<PostSocialCode, "type" | "code" | "search">;

// ----------------------------------
// 유저 소셜 로그인 Hook
// ----------------------------------
const UseAuth = () => {
  const router = useRouter();
  const { clearUser, updateUser, user } = UseUserQuery();

  /** 소셜로그인
   * 1. postSocial() 소셜 로그인 요청
   * 2. 유저 쿼리키 데이터 업데이트
   * 3. 선택 정보 저장여부에 따라 사용자 리디렉션
   */
  async function login({ type, code, search }: LoginPayload) {
    let url = `${AUTH_API.login}${type}`;
    if (search) url += `?${search}`;

    const response = await postSocial({ url, code });

    const userData = response.data;
    updateUser(userData);

    if (response.status === 200) {
      return router.push("/style/trend");
    }

    if (response.status === 222) {
      return router.push("/mypage/extra-info");
    }
  }

  /** 로그아웃: 쿠키 초기화, 유저 초기화 */
  async function logout() {
    await deleteCookie();
    await clearUser();
  }

  async function authServerCall(urlEndpoint: string, data: UserAtom) {
    console.log("서버 콜");
  }

  return {
    user,
    login,
    logout,
  };
};

export default UseAuth;
