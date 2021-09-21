import React, { useEffect } from "react";
import { useCart } from "react-use-cart";

export default function Cart(props) {
  const { isEmpty, totalUniqueItems, items, totalItems,cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  if(isEmpty) return <div className="cart-box">The Cart is Empty!</div>
  return (
    <div className="cart-box">
      <div className="product-properties">
        <div className="product-title">Cart ({totalUniqueItems}) </div>
        <div className="product-title"></div>
      </div>
      <div className="amount">

      </div>
    </div>
  );
}
 