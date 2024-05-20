import axios from "axios"
import React, { useEffect, useState } from "react"
import { checkArrayLengthExists, checkObjEmpty } from "../../../utills/functions"

const UseEffect1=()=>{

    const [todos,setTodos]=useState([])
    const [count,setCount]=useState(1)

    const [age,setAge]=useState(10)

    const [eachTodo,setEachTodo]=useState({})



    //useEffect will trigger once (fetch data from server)
    useEffect( ()=>{
       
        fetchData()

    },[])


    //useEffect will trigger every time when array value changes
    useEffect( ()=>{

        document.title=`Count ${count}`

        fetchEachTodo()
        
    },[count])


    // to fecth all todos from server
    const fetchData= async()=>{

        const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log("result",result)

        if(result.status === 200){
            setTodos(result.data)
        }
        
    }


    //this function is used to fetch todo based on the current count
   const fetchEachTodo= async()=>{

    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
        console.log("result",result)

        if(result.status === 200){
            setEachTodo(result.data)
        }
   }



    const handleIncrement=()=>{

        setCount(count+1)
    }


    

    return(
        <>

        <h2>use Effect Exaple</h2>

        {

            checkObjEmpty(eachTodo) ? <>

            {
                <h3>{eachTodo.title}</h3>
            }
            
            </>
            :
            <h3>no data</h3>

        }

        <h3>{count}</h3>

        <button onClick={handleIncrement}>Count Increment</button>

        {
            checkArrayLengthExists(todos)?
            <>

            {
                todos.map( eachTodo=>{

                    return(

                        <React.Fragment key={eachTodo.id}>
                        <h3>{eachTodo.title}</h3>
                        </React.Fragment>
                    )
                })
            }
            
            </>
            :
            null
        }
        
        </>
    )


}

export default UseEffect1