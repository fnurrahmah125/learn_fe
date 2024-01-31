import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="text-center">Home Page</h1>
      <Card />

      <div className="mt-3 text-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/about")}
        >
          About Page
        </button>
      </div>
    </div>
  );
}

export default Home;
