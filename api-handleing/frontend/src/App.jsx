import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, error, loading] = CustomReactQuery("/api/products");

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Content is Loading...</h1>;
  }

  return (
    <>
      <h1>Mibits tech test API</h1>
      <h2>Number of product is : {products.length}</h2>
    </>
  );
}

export default App;

const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [products, error, loading];
};
