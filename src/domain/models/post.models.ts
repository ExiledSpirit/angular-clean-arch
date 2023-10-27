export interface WritePostBody {
  tags: string[];
  content: string;
  author: string;
  imgSrc: string;
}

export interface PostModel {
  id: string;
  content: string;
  tags: string;
  author: string;
  createdAt: string;
  imgSrc: string;
}
