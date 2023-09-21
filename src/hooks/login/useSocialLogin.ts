import { api } from "@utils/axios/api";

interface postSocialCode {
  type: "naver" | "kakao";
  code: string;
  state?: string;
  search?: string;
}

/** 소셜 로그인
 * @param {postSocialCode} params
 * @param {string} params.type "naver" | "kakao"
 * @param {string} params.code 인가 코드
 * @param {string} params.state state값(naver)
 * @param {string} params.search 전체 searchParams
 * @returns 성공 시, 헤더에 access_token, refresh_token을 넣어줍니다.
 */
export const postSocialCode = async ({ type, code, state, search }: postSocialCode) => {
  let url = `/callback/${type}`;
  if (search) url += `?${search}`;

  try {
    const { data } = await api.post(url, { code, state: state || "" });

    // <data의 isExtraInfo 확인>
    // navigate
    // - false 시, mypage/extra-info/{email-id}
    // - ture 시, style/trend

    return {
      success: true,
      message: "성공",
    };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      message: "실패",
    };
  }
};
