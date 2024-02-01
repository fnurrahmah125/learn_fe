import Profile from "./components/Profile";
import Introduction from "./components/Introduction";
import { useEffect, useState } from "react";

function App() {
  // 👉 left -> getter
  // 👉 right -> setter
  const [number, setNumber] = useState(0);
  const [isGreater, setIsGreater] = useState("false");

  useEffect(() => {
    console.log("Hello World!");
  }, []); // 👉 will run once

  useEffect(() => {
    if (number > 5) {
      setIsGreater("true");
    } else {
      setIsGreater("false");
    }
  }, [number]);

  return (
    <>
      <Profile />
      <hr />
      <Introduction name="John Doe" />
      <Introduction name="Jane Doe" />
      <hr />
      <h1>useState</h1>
      <p>Count: {number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <hr />
      <h1>useEffect</h1>
      <p>Count greater than 5: {isGreater}</p>
    </>
  );
}

export default App;
