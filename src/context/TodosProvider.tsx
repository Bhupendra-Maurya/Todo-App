import React, { ReactNode, useEffect, useState, useCallback } from "react";
import TodosContext from "./TodosContext";
import TodosType from "../type";
import { SampleTodos } from "../SampleTodos";

const TodosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const storedTodos = localStorage.getItem("Todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos(SampleTodos);
      localStorage.setItem("Todos", JSON.stringify(SampleTodos));
    }
  }, []);

  const addTodo = useCallback((todo: TodosType) => {
    setTodos((prevTodos) => {
      const newTodo = [...prevTodos, todo];
      localStorage.setItem("Todos", JSON.stringify(newTodo));
      return newTodo;
    });
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("Todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("Todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => !todo.completed);
      localStorage.setItem("Todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        filter,
        setFilter,
        toggleTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
