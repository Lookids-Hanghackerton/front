export interface FollowData {
  memberNickName: string;
  profileImage: string;
}

export interface FollowResponse {
  status: number;
  msg: string;
  data: FollowData[];
}