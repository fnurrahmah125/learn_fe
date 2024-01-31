import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="text-center">About Page</h1>
      <Modal />
      <div className="mt-3 text-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/")}
        >
          Home Page
        </button>
      </div>
    </div>
  );
}

export default Home;
