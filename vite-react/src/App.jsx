import Dev from "./Dev";

function App() {
  const devName = "Mithu";
  //when a const is declare in return it becomes a evaluated expression no if or else is used in evaluated expression
  return (
    <>
      <h1>First step on React with Vite & | {devName} </h1>
      <Dev />
    </>
  );
}

export default App;
