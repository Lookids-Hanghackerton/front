export interface Feed {
  feedsId: number;
  memberUniqueId: string;
  createdAt: string;
  modifiedAt: string;
  content: string;
  likeCount: number;
  replyCount: number;
  pictures: string[];
  products: string[];
  hashTag: string[];
  stored: boolean;
}

export interface RankingData {
  memberNickName: string;
  feedsList: Feed[];
  countFollower: number;
  memberProfileUrl: string;
}

export interface RankingResponse {
  status: number;
  msg: string;
  data: RankingData[];
}