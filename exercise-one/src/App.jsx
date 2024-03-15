import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  // const [multiplyValue, setMultiplyValue] = useState(1)
  let multiplyValue = value * 5;

  const multiplyByFive = () => {
    // setMultiplyValue(value * 5)
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplyByFive}>Click here to multiply by 5</button>
      <h2>Multiplied value: {multiplyValue}</h2>
    </>
  );
}

export default App;
