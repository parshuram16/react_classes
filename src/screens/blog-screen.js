


import React, { useState } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { useSelector } from 'react-redux';


function BlogScreen() {

  const reduxState  =useSelector((state)=>state);

  console.log(reduxState,"reduxState")

  return (
    <div>
        <NavBar/>
        <h1>Book Count  </h1>

    </div>
  )
}

export default BlogScreen