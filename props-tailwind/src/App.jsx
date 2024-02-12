import "./App.css";
import Card from "./components/Card.component";

function App() {
  //btn text for username Mithu will be set as default declare in Card component level
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="mibits-tech" btnText="Click me" />
      <Card username="Mithu" />
    </>
  );
}

export default App;
