import { useCallback, useState } from "react"
import TodosViewer from "./todos"
import Headings from "./heading"



const UseCallbackExample=()=>{

    const [todos,setTodos]=useState(["9am class"])

    const [salary,setSalary]=useState(1000)

  const addTodoFn= useCallback(()=>{

    setTodos([...todos,"1pm lunch time"])
    
  },[todos])

  const salaryIncrement=()=>{

    setSalary(salary+1000)
  }

    return(

        <>

        <Headings title={"salary details"} />

        <h3>{salary}</h3>
        <button onClick={salaryIncrement}>salaryIncrement</button>


        <Headings title={"todo details"} />
        <TodosViewer todos={todos} addTodoFn={addTodoFn} />
        
        </>
    )
}

export default UseCallbackExample

