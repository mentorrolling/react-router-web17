import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bienvenido {user.name}!!</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <Link to={`/product/${product.id}`} className="nav-link">
              <div className="card h-100 d-flex justify-content-center">
                <img
                  src={product.image}
                  className="card-img-top img-card"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
