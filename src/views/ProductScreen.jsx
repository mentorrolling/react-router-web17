import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductScreen = ({ product }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1>Vista de producto</h1>
        </div>
      </div>
      {!producto ? (
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 p-2 d-flex justify-content-center align-items-center">
                  <img
                    src={producto.image}
                    className="img-fluid rounded-start"
                    alt={producto.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">{producto.title}</h5>
                    <p className="card-text fs-4">{producto.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text">
                        <span className="badge text-bg-warning">
                          {producto.category}
                        </span>
                      </p>
                      <p className="fs-2">${producto.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
