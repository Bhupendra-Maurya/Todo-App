import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
function AddTodo() {
  const [input, setInput] = useState<string>("");
  const [days, setDays] = useState(1);
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo({
        id: Date.now() * Math.floor(Math.random() * 100),
        text: input,
        completed: false,
        days,
      });
      setInput("");
      setDays(1)
    }
  };

  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <input
        type="number"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        min="1"
        placeholder="Days"
      />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
