
export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface CommentDummyModel {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface CommentResponseDummyjson {
    comments: CommentDummyModel[],
    total: number,
    skip: number,
    limit: number
}