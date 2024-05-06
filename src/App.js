import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navba from "./components/Navba";
const App = () => {
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
    <div>
      <div className="container">
        <Navba />
        <div className="row">
        {data.slice(0, 16).map((product) => (
            <div className=" col-3 d-grid gap-3" key={product.id}>
              <Product 
                title={product.title} 
                images={product.images} 
                description={product.description.slice(0,50)} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
