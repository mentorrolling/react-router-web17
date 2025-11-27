import React from "react";
import { Link } from "react-router-dom";
const CardProduct = ({ product }) => {
  const { image, title, id } = product;
  return (
    <div className="col">
      <Link to={`/product/${id}`}>
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
