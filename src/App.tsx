import TodosProvider from "./context/TodosProvider";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterTodos from "./components/FilterTodos";
import ClearCompleted from "./components/ClearCompleted";

function App() {
  return (
    <div className="App">
      <TodosProvider>
      <AddTodo />
      <FilterTodos/>
      <TodoList/>
      <ClearCompleted/>
    </TodosProvider>
    </div>
  );
}

export default App;
