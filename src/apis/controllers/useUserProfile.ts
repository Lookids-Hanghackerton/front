import { api } from "@utils/axios/api";

/** 유저 정보 요청 */
export const getMemberInfo = async (memberUniqueId: string) => {
  return api.get(`/mypage/${memberUniqueId}`);
};

/** 유저 정보 수정 요청 */
// 여기 작성
