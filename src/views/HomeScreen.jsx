import React, { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    traerDatos();
  }, []);

  const traerDatos = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();

    setProducts(data);
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1>Nuestra lista de productos</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
