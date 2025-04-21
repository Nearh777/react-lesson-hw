

export interface TodoDummyModel {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}


export interface TodoResponseDummyjson {
    todos: TodoDummyModel[];
    total: number,
    skip: number,
    limit: number
}