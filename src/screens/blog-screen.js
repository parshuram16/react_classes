

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./cartStyles.css";
import NavBar from "../components/functional/navbar/navbar"
import { deleteFromCartAction } from "../redux/cart/action";





function BlogScreen() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const incrementQuantity = (productId) => {
    // dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  };

  const decrementQuantity = (productId) => {
    // dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  };


  const deleteFromCart=(id)=>{

    dispatch(deleteFromCartAction(id))
  }


  return (
    
    <div className="cart-container">
      <NavBar/>
      
      <h1>Cart count {cart.length}</h1>

      {cart.map((eachProduct) => (
        <div className="cart-item" key={eachProduct.id}>
          <img src={eachProduct.thumbnail} alt={eachProduct.title} />
          <div className="cart-item-details">
            <h3>{eachProduct.title}</h3>
            <p>{eachProduct.description}</p>
            <p>Price: ${eachProduct.price}</p>
          </div>
          <div className="cart-item-controls">

          <button onClick={() => deleteFromCart(eachProduct.id)}>Delete from cart</button>
            
            {/* <button
              onClick={() => decrementQuantity(eachProduct.id)}
              disabled={eachProduct.quantity <= 1}
            >
              -
            </button> */}
            <span className="cart-item-quantity">{eachProduct.quantity}</span>
            {/* <button onClick={() => incrementQuantity(eachProduct.id)}>+</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
export default BlogScreen;

