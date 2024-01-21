import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteTodoAsync, fetchTodosAsync } from "../store/slices/todoSlice";
import { Link } from "react-router-dom";

function Home() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/create">/create</Link>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - <Link to={todo.id}>/detail</Link> |{" "}
            <Link to={`/edit/${todo.id}`}>/edit</Link> |{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
