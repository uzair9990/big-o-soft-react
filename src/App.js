import React from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import Carousel from "./components/Carousel";

function App() {
  const [error, data] = useFetch("https://fakestoreapi.com/products");

  return (
    <div style={{ marginTop: "100px" }}>
      {!error && !data ? (
        <h2 className="heading-center"> Loading ... </h2>
      ) : error ? (
        <p>{error}</p>
      ) : !error && data ? (
        <Carousel jsonData={data} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
