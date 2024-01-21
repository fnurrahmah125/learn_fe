import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTodoAsync, updateTodoAsync } from "../store/slices/todoSlice";

function Edit() {
  const todo = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodoAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setDescription(todo.description);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
    };

    dispatch(updateTodoAsync(id, payload));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <pre>{JSON.stringify(todo, null, 2)}</pre>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
