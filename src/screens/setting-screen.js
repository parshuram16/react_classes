


import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { buyBookFunction, returnBookFunction } from '../redux/action'
import { profileUpdate } from '../redux/profile/action'


function SettingScreen() {

  const dispatch =useDispatch()
  const 
  {
    books:{bookCount},
    profile:{profile}
  } =useSelector((state)=>state);

  const bookBuy=()=>{

    dispatch(buyBookFunction())

  }

  const bookReturn =()=>{

    dispatch(returnBookFunction())

  }

  const updateProfile=()=>{

    dispatch(profileUpdate(
      {
        name:"ram",
        email:"parshuram@16gmail.com",
        mobile:950294
      }
    ))
  }

  return (
    <div>

        <NavBar/>

        <button onClick={bookBuy}>BUY BOOK</button>
        <button onClick={bookReturn}>RETURN BOOK</button>
        <h2>Book count in library {bookCount} </h2>

        <h1>profile info</h1>
        <h3>{profile.name}</h3>
        <h3>{profile.email}</h3>
        <h3>{profile.mobile}</h3>

        <button onClick={updateProfile}>profile details update</button>



        

    </div>
  )
}

export default SettingScreen