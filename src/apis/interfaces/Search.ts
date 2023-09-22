export interface SearchItem {
  feedsId: number;
  memberNickName: string;
  pictures: string[];
}

export interface SearchResponse {
  status: number;
  msg: string;
  data: { searchList: SearchItem[] };
}