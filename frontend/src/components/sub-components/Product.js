import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";

export default function Product(props) {
  const { product } = props;
  const { addItem } = useCart();
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 product">
      <div className="card">
          {/* <img src={product.image} alt={product.name} /> */}
          <div className="image-area">

          </div>
      </div>
      <div className="products-body">
        <div className="price">${product.price}</div>
        <div className="product-name">{product.name}</div>
        <button className="add-button" onClick={() => addItem(product.added)}>Add</button>
      </div>
    </div>
  );
}
