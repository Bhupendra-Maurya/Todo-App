import useTodos from "../hooks/useTodos";

const ClearCompleted: React.FC = () => {
  const { clearCompleted } = useTodos();
  return (
    <div className="clearCompleted">
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ClearCompleted;
