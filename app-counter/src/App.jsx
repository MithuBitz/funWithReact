import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React with Mibits Tech</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addCounter}>Add Counter {counter}</button>
      <br />
      <button onClick={removeCounter}>Remove Counter {counter}</button>
    </>
  );
}

export default App;
