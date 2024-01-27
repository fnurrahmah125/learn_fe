import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="grid place-content-center min-h-screen">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
