import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {producto ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={producto.image}
                className="img-fluid rounded-start"
                alt={producto.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {producto.category}
                  </small>
                </p>
                <p className="fs-2">${producto.price}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
