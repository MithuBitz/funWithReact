import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // This is not working bcoz app is created by Vite
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>MibitsBlog with appwrite</h1>
    </>
  );
}

export default App;
