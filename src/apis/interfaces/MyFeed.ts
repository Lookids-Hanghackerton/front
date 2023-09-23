export interface FeedData {
  content: string;
  createdAt?: string;
  feedsId: number;
  hashTag: string[];
  likeCount: number;
  memberUniqueId?: string;
  modifiedAt?: string;
  pictures: string[];
  products?: number[];
  replyCount: number;
  stored?: boolean;
}

export interface FeedResponse {
  status: number;
  msg: string;
  data: {
    childrenList: string[];
    feedsList: FeedData[];
  };
}

export interface FeedDetail {
  status: number;
  msg: string;
  data: FeedDetailData;
}

export interface FeedDetailData {
  feedsId: number;
  content: string;
  likeCount: number;
  replyCount: number;
  memberUniqueId: string;
  pictures: string[];
  hashTag: string[];
  products: number[];
}