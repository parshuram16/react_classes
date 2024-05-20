import axios from "axios"
import React, { useEffect, useState } from "react"
import { checkArrayLengthExists } from "../../../utills/functions"
import ImageComponent from "../image/image"
import { Link } from "react-router-dom"

const UseEffect1=()=>{

    const [todos,setTodos]=useState([])

    //useEffect will trigger once (fetch data from server)
    useEffect( ()=>{
       
        fetchData()

    },[])




    // to fecth all todos from server
    const fetchData= async()=>{

        const result = await axios.get("https://dummyjson.com/products")
        console.log("result",result)

        if(result.status === 200){
            setTodos(result.data.products)
        }
        
    }


    

    return(
        <>

        <h2>use Effect Exaple</h2>

        {
            checkArrayLengthExists(todos)?
            <>

            {
                todos.map( eachTodo=>{

                    return(

                        <React.Fragment key={eachTodo.id}>
                        <h3>{eachTodo.title}</h3>

                        <ImageComponent src={eachTodo.thumbnail}/>

                        <button>

                            <Link to={`/${eachTodo.brand}/${eachTodo.id}`}>
                            Click to view product 
                            </Link>
                        </button>



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