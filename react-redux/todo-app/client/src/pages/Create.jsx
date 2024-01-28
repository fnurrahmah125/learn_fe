import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoAsync } from "../store/slices/todoSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
    };

    dispatch(createTodoAsync(payload));
    navigate("/");
  };

  return (
    <div>
      <h1>Create Page</h1>
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

export default Create;
