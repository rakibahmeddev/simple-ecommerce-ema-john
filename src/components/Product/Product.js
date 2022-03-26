import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { img, name, price, sellers, ratings } = props.product;

  // const { handleAddToCart } = props.handleAddToCart;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h3>{name}</h3>
        <h5>Price: ${price}</h5>
        <p>Manufacturer: {sellers}</p>
        <p>Ratting: {ratings}</p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add To Cart
        <span>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </span>
      </button>
    </div>
  );
};

export default Product;
