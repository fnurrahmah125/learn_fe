import { Link } from "react-router-dom";

function Home() {
  const userId = 1;

  return (
    <div className="wrapper text-center">
      <h1 className="mb-3">Home</h1>
      <button type="button" className="btn btn-primary">
        <Link
          to={`/user/${userId}`}
          className="text-white link-underline link-underline-opacity-0"
        >
          User Page
        </Link>
      </button>
    </div>
  );
}

export default Home;
