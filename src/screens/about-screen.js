

import React, { useContext } from 'react'
import NavBar from '../components/functional/navbar/navbar'
import { themeInfo } from '../navigations/navigations-stack'
import UseMemoExample from '../components/functional/useMemo/useMemo'

function AboutScreen() {

  const {count,currentState}=useContext(themeInfo)
  return (
    <div>

        <NavBar/>

        <h2>useReducer global count {currentState.count}</h2>

        <h2>Welcome to AboutScreen current count {count}</h2>
      <ol>
        {
          currentState.subjects.map(each=><li key={each}>
            {each}
          </li>)

        }

  </ol>

        <UseMemoExample/>

        

    </div>
  )
}

export default AboutScreen