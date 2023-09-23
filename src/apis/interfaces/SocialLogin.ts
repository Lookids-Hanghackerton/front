export interface PostSocialCode {
  type: "naver" | "kakao";
  code: string;
  state: string;
  search: string;
  url: string;
}
