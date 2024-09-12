import React from "react";
import TodosType from "../type";

interface TodoItemProps {
  todo: TodosType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <li>
      <div
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        <span>{todo.text}</span>
      </div>
      <span>{todo.days} days</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
