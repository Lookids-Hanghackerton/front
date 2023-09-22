import { api } from "@utils/axios/api";
import { PostSocialCode } from "../interfaces/SocialLogin";

/** 소셜 로그인 요청 */
export const postSocial = async ({ url, code }: Pick<PostSocialCode, "url" | "code">) => {
  const response = await api.post(url, { code });
  const {
    data: { status, data: resData },
  } = response;

  const { accessKey, refreshKey, ...userData } = resData;
  localStorage.setItem("accessKey", accessKey);
  localStorage.setItem("refreshKey", refreshKey);

  return { success: true, status, data: userData };
};
