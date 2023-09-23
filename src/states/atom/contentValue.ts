import { atom } from "recoil";

export const userTokenState = atom<string>({
  key: "userTokenState",
  default: "",
});

export const inputValueState = atom({
  key: "inputValueState",
  default: "",
});

export const selectImageState = atom<File | null>({
  key: "selectedImageState",
  default: null,
});

export const searchResultsState = atom({
  key: "searchResultsState",
  default: null,
});

export const selectedResultState = atom({
  key: "selectedResultState",
  default: null,
});
