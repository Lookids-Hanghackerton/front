export interface Member {
  createdAt: string;
  modifiedAt: string;
  memberId: number;
  memberEmailId: string;
  memberUniqueId: string;
  memberNickName: string;
  profileImage: string;
  social: string;
  introduce: string;
  point: number;
  authority: string;
}

export interface Feed {
  feedsId: number;
  content: string;
  likeCount: number;
  replyCount: number;
  member: Member;
  pictures: string[];
  hashTag: string[];
}

export interface FeedResponse {
  status: number;
  msg: string;
  data: {
    feedsList: Feed[];
  };
}