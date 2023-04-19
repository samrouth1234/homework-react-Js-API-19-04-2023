import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navba from "./components/Navba";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="App">
        <Navba />
        <main>
          {data.slice(0, 16).map((data) => (
            <Product key={data.id} data={data} />
          ))}
        </main>
      </div>
    </>
  )
}
export default App;
