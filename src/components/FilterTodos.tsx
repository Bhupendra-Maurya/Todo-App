import useTodos from "../hooks/useTodos";

function FilterTodos() {
  const { setFilter } = useTodos(); 
  return (
    <div className="filter-todos">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
}

export default FilterTodos;
