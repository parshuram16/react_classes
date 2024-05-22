


import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { themeInfo } from '../navigations/navigations-stack'

function SettingScreen() {


  const {
    handleDarkLightModes,
    incrementCounter,
    handleIncrement,
    handleDecrement,
    currentState,
    handleChangeName,
    subjectAdd

} =useContext(themeInfo)

  const handleModes=()=>{

    //control the state which is created globally

    handleDarkLightModes()


  }

  // const handleIncrement=()=>{

  //   incrementCounter(10)
  // }

  const changeCounterValue=()=>{

    handleIncrement()

  }

  return (
    <div>

        <NavBar/>

        <h2>Welcome to SettingScreen  {currentState.name}</h2>
        <button onClick={handleModes}>Click to enable/disable the dark mode</button>

        {/* <button onClick={handleIncrement}>Count Increment</button> */}

        <button onClick={changeCounterValue}>Count Increment useReducer</button>

        <button onClick={handleDecrement}>Count decrement useReducer</button>

        <button onClick={handleChangeName}>change name</button>

        <button onClick={()=>{subjectAdd("Nest js")}}>Add new subject</button>


    </div>
  )
}

export default SettingScreen