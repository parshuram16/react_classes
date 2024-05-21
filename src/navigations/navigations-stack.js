
import React, { createContext, useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/home-screen'
import AboutScreen from '../screens/about-screen'
import SettingScreen from '../screens/setting-screen'
import BlogScreen from '../screens/blog-screen'
import InvalidScreen from '../screens/invalid-screen'
import ProductDetails from '../screens/product-details'



export const userInfo=createContext()

export const themeInfo=createContext()


const reducerFn=(state,action)=>{

  switch(action.type){

    case "INCREMENT_ACTION":
      return {...state,count:state.count+1}
      default :
       return state
  }


}

const initialState={

  count:0

}







function Navigationstack() {

  const [username,setUserName]=useState({
    name:"ram",
    age:22,
    salary:100000
  })

  const [darkMode,setDarkMode]=useState(true)

  const [count,setCount]=useState(0)

  const [currentState,dispatch]=useReducer(reducerFn,initialState)

  const handleDarkLightModes=()=>{

    setDarkMode(!darkMode)
  }

  const incrementAction=()=>{

    dispatch({

      type:"INCREMENT_ACTION"

    })
  }

  const incrementCounter=(value=1)=>{

    setCount(count+value)
  }



  return (
    

    <>

    <themeInfo.Provider value={
      {
      darkMode,
      handleDarkLightModes,
      incrementCounter,
      count,
      incrementAction,
      currentState


    }

    } >

    <userInfo.Provider  value={username} >

    <BrowserRouter>

    <Routes>

        <Route  path='/' Component={HomeScreen}  />
        <Route  path='/about' Component={AboutScreen}  />
        <Route  path='/settings' Component={SettingScreen}  />
        <Route  path='/blog' Component={BlogScreen}  />

        <Route  path='/:brand/:productId' Component={ProductDetails}  />


        <Route  path='*' Component={InvalidScreen}  />

    </Routes>
    
    </BrowserRouter>

    </userInfo.Provider>

    </themeInfo.Provider>
    
    
    </>
  )
}

export default Navigationstack

