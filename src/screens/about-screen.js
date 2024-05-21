

import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { themeInfo } from '../navigations/navigations-stack'

function AboutScreen() {

  const {count}=useContext(themeInfo)
  return (
    <div>

        <NavBar/>

        <h2>Welcome to AboutScreen current count {count}</h2>
    </div>
  )
}

export default AboutScreen