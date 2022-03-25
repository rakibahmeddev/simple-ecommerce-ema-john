import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, sellers, rattings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <span>Manufacturer: {sellers}</span>
      <span>Ratting: {rattings}</span>
    </div>
  );
};

export default Product;
