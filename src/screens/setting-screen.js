


import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { themeInfo } from '../navigations/navigations-stack'

function SettingScreen() {


  const {
    handleDarkLightModes,
    incrementCounter

} =useContext(themeInfo)

  const handleModes=()=>{

    //control the state which is created globally

    handleDarkLightModes()

  }

  const handleIncrement=()=>{

    incrementCounter(10)
  }

  return (
    <div>

        <NavBar/>

        <h2>Welcome to SettingScreen</h2>
        <button onClick={handleModes}>Click to enable/disable the dark mode</button>

        <button onClick={handleIncrement}>Count Increment</button>


    </div>
  )
}

export default SettingScreen