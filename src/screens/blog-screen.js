


import React, { useState } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { useSelector } from 'react-redux';


function BlogScreen() {

  const {bookCount} =useSelector((state)=>state);

  return (
    <div>
        <NavBar/>
        <h1>Book Count {bookCount}</h1>

    </div>
  )
}

export default BlogScreen