import { signInWithGoogle } from "./firebase";

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
      <img src={localStorage.getItem("profilePic")} alt="profile-pic" />
    </div>
  );
}

export default App;
