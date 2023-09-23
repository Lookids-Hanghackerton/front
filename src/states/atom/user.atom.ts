import { atom } from "recoil";

export type UserAtom = {
  memberId: number | null;
  memberUniqueId: string;
  memberNickName: string;
  profileImage: string;
  accessKey: string;
  refreshKey: string;
} | null;

export const userAtom = atom<UserAtom>({
  key: "userAtom",
  default: null,
});
