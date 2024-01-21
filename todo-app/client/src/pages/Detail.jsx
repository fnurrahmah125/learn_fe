import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoAsync } from "../store/slices/todoSlice";
import { useParams } from "react-router-dom";

function Detail() {
  const todo = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTodoAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Detail Page</h1>
      {todo ? (
        <>
          <h2>{todo.name}</h2>
          <p>{todo.description}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Detail;
