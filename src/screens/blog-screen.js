


import React, { useEffect, useState } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { useDispatch, useSelector } from 'react-redux';
import { productListingActions } from '../redux/products/action';


function BlogScreen() {

  const {products,loading}  =useSelector((state)=>state);

  //console.log(reduxState,"reduxState")
  const dispatch=useDispatch();

  useEffect(()=>{

    dispatch(productListingActions())
    
  },[])

  return (
    <div>
        <NavBar/>
        <h1>Book Count  </h1>

        {
          loading?
          <h2>...please wait</h2>:
          <>
          {

            products.products?.map(each=>{
              return(
                <>

                <h3>{each.title}</h3>

                
                </>
              )
            })
          }
          </>
        }

    </div>
  )
}

export default BlogScreen