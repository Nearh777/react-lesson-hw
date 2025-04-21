
export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface PostDummyModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface PostResponseDummyjson {
    posts: PostDummyModel[];
    total: number,
    skip: number,
    limit: number
}