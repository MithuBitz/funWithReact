import "./App.css";
import Card from "./components/Card.component";

function App() {
  let myObj = { username: "Mibits", age: 32 };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="mibits-tech" someObj={myObj} alsoObj={newArr} />
    </>
  );
}

export default App;
