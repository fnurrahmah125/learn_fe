import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/userSlice";

const User = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>User Component</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default User;
