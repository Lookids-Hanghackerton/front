import { api } from "@utils/axios/api";
import { PostSocialCode } from "../interfaces/SocialLogin";

/** 소셜 로그인 콜
 * 1. 소셜 로그인 요청을 보냄
 * 2. response의 유저 데이터를 반환
 */
export const postSocial = async ({ url, code }: Pick<PostSocialCode, "url" | "code">) => {
  const response = await api.post(url, { code });
  return { success: true, status: response.status, data: response.data.data };
};
