


import React, { useState } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import UseCallbackExample from '../components/functional/useCallback/useCallback'
import useCounter from '../components/functional/customHooks/useCounter'
import useAxios from '../components/functional/customHooks/useAxios'


function BlogScreen() {

  const [age,incrementAge,decrementAge,resetAge]=useCounter(100,1)
  const [salary,incrementSalary,decrementSalary,resetSalary]=useCounter(1000,1000)

  const [products,loading,error]=useAxios("https://fakestoreapi.com/products")
  console.log(products,"products")

  return (
    <div>
        <NavBar/>

        <h2>Welcome to BlogScreen </h2>
        <h2>current age {age}</h2>
        <button onClick={incrementAge}>Increment age</button>
        <button onClick={decrementAge}>Decrement age</button>
        <button onClick={resetAge}>Reset age</button>



        <h2>current salary {salary}</h2>
        <button onClick={incrementSalary}>Increment salary</button>
        <button onClick={decrementSalary}>Decrement salary</button>
        <button onClick={resetSalary}>Reset salary</button>


    </div>
  )
}

export default BlogScreen