import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div className="wrapper">
      <h2>User Id is {id}</h2>
    </div>
  );
}

export default User;
