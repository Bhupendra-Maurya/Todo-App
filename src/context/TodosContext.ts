import { createContext } from "react";
import TodosType from "../type";

interface TodosContextType {
    todos: TodosType[];
    addTodo: (todo: TodosType) => void;
    deleteTodo: (id: number) => void;
    filter:string;
    setFilter:(filter:string)=>void;
    toggleTodo:(id:number)=>void;
    clearCompleted:()=>void;
  }
const TodosContext = createContext<TodosContextType | undefined>(undefined);
export default TodosContext;
