import { createContext } from "react";

export type MyDataContextType = {
  todos: string[];
  addTodo: (todo: string) => void;
};

export const initialMyDataContext: MyDataContextType = {
  todos: [],
  addTodo: (todo: string) => {},
};

export const MyDataContext = createContext(initialMyDataContext);
