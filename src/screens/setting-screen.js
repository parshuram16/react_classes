


import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { buyBookFunction, returnBookFunction } from '../redux/action'


function SettingScreen() {

  const dispatch =useDispatch()
  const {bookCount} =useSelector((state)=>state);

  const bookBuy=()=>{

    dispatch(buyBookFunction())

  }

  const bookReturn =()=>{

    dispatch(returnBookFunction())

  }

  return (
    <div>

        <NavBar/>

        <button onClick={bookBuy}>BUY BOOK</button>
        <button onClick={bookReturn}>RETURN BOOK</button>
        <h2>Book count in library {bookCount}</h2>

        

    </div>
  )
}

export default SettingScreen