import { atom } from "recoil";

type UserAtom = {
  memberId: number | null;
  memberUniqueId: string;
  memberNickName: string;
  profileImage: string;
} | null;

export const userAtom = atom<UserAtom>({
  key: "userAtom",
  default: null,
});
