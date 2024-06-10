



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../customHooks/useAxios";

import ImageComponent from "../image/image";
import "./index.css";
import CircleSpinner from "../spinners/circlespinner";
import { useDispatch, useSelector } from "react-redux";
import { productListingActions } from "../../../redux/products/action";
import { addToCartAction } from "../../../redux/cart/action";

const UseEffect1 = () => {
  
  //const [todos, loading, error] = useAxios("https://dummyjson.com/products");


  const {products,loading}  =useSelector((state)=>state.products);

  //console.log(reduxState,"reduxState")
  const dispatch=useDispatch();

  useEffect(()=>{

    dispatch(productListingActions())
    
  },[])


  if (loading) {
    return <CircleSpinner />;
  }

//   if (error) {
//     return <h2>Something went wrong</h2>;
//   }

  const handleAddToCart = (product) => {
    alert(`Added ${product.title} to cart!`);
    dispatch(addToCartAction(product))
  };

  return (
    <div className="product-list">
      <h2>Use Effect Example</h2>
      <div className="products">
        {products?.map((eachTodo) => (
          <div className="product-card" key={eachTodo.id}>
            <h3>{eachTodo.title}</h3>
            <ImageComponent src={eachTodo.thumbnail} />
            <div className="product-details">
              <p>{eachTodo.description}</p>
              <p>Price: ${eachTodo.price}</p>
              <button>
                <Link to={`/${eachTodo.brand}/${eachTodo.id}`}>
                  Click to view product
                </Link>
              </button>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(eachTodo)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect1;
