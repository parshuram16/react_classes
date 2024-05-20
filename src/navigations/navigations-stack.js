
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/home-screen'
import AboutScreen from '../screens/about-screen'
import SettingScreen from '../screens/setting-screen'
import BlogScreen from '../screens/blog-screen'
import InvalidScreen from '../screens/invalid-screen'
import ProductDetails from '../screens/product-details'



function Navigationstack() {
  return (
    

    <>

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
    
    
    </>
  )
}

export default Navigationstack

