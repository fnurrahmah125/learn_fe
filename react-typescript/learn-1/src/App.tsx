import "./App.css";
import EventExample from "./components/EventExample";
import ItemList from "./components/ItemList";
import PostList from "./components/PostList";
import ShapeList from "./components/ShapeList";
import UseRefExample from "./components/UseRefExample";
import UseStateExample from "./components/UseStateExample";
import Child from "./components/children/Child";
import Parent from "./components/children/Parent";

function App() {
  return (
    <>
      <Parent>
        <Child />
      </Parent>
      <hr />
      <EventExample />
      <hr />
      <UseStateExample />
      <hr />
      <UseRefExample />
      <hr />
      <ItemList />
      <hr />
      <ShapeList />
      <hr />
      <PostList />
    </>
  );
}

export default App;
