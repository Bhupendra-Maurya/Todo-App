import TodoItem from "./TodoItem";
import TodosType from "../type";
import useTodos from "../hooks/useTodos";

function TodoList() {
  const { todos, deleteTodo, filter, toggleTodo } = useTodos();
  const filterTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
  });
  
  return (
    <div className="todo-list">
      <ul>
        {filterTodos.length === 0 ? (
          <h3>No Todos available</h3>
        ) : (
          filterTodos.map((todo: TodosType) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
