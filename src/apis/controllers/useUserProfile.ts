import { Child, User } from "@/components/profile/ProfileEditForm";
import { api } from "@utils/axios/api";

/** 유저 정보 요청 */
export const getMemberInfo = async (memberUniqueId: string) => {
  return api.get(`/mypage/${memberUniqueId}?sort=latest`);
};

/** 유저 정보 수정 요청 */
export const putMemberInfo = async (userData: Pick<User, "memberNickName" | "introduce">) => {
  return api.put(`/mypage/edit`, userData);
};

/** 유저 정보 수정 요청 */
export const postChildren = async (childData: Child) => {
  return api.post(`/mypage/children`, childData);
};

/** 유저 정보 수정 요청 */
export const putChildren = async (childData: Child, childrenId: number) => {
  return api.put(`/mypage/children`, { childrenId: 3, ...childData });
};

/** 유저 프로필 수정 요청 */
export const putImage = async (childData: Child) => {
  // return api.put(`/mypage/children`, { childrenId: 3, ...childData });
};

// /** 유저 정보 수정 요청 */
// export const putMemberInfo = async (userData: Pick<User, "memberNickName" | "introduce">) => {
//   return api.put(`/mypage/edit`, userData);
// };

// userData 객체의 속성들을 formData에 추가
// for (const key in userData) {
//   const value = userData[key as keyof typeof userData];
//   // formData.append(key, new Blob(value));
// }

// const formData = new FormData();
// return api.put(`/mypage/extra-info`, {
//   url: "endpoint",
//   method: "pust",
//   data: formData,
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });
