import { useState } from "react"
import ButtonNeww from "../button/button3"



const Counter=()=>{

    const initialValue=1

    const [count,setCount] = useState(initialValue)

    const [issubscribe,setIssubscribe] = useState(false)

    const stateHandler = (action)=>{

        switch(action){
            

            case "INCREMENT":
                setCount(count+1)
                break
            case "DECREMENT":
                if(count>0){
                setCount(count-1)
            }
                break
            case "RESET":
                setCount(0)
                break
            default :
                break
            

        }

        
    }

    const subscribeHandler=()=>{

        setIssubscribe(!issubscribe)
    }

    return(

        <>

        <h3>counter example in fuctional based components</h3>
        <h3>{count}</h3>
        {/* <button onClick={()=>stateHandler("INCREMENT")} style={{backgroundColor:"black" , color:"white"}}>increment button</button>
        <button onClick={()=>stateHandler("DECREMENT")} style={{backgroundColor:"black" , color:"white"}}>decrement button</button>
        <button onClick={()=>stateHandler("RESET")} style={{backgroundColor:"black" , color:"white"}}>reset</button> */}


        {

        issubscribe &&
        <>
        <ButtonNeww onClick={()=>stateHandler("INCREMENT")}>Increment</ButtonNeww>
        <ButtonNeww onClick={()=>stateHandler("DECREMENT")}>Decrement</ButtonNeww>
        <ButtonNeww onClick={()=>stateHandler("RESET")}>Reset</ButtonNeww>
        </>
        
        }

        <ButtonNeww onClick={subscribeHandler}>{issubscribe?"unSubscribe":"subscribe"}</ButtonNeww>
        
        
        </>
    )
}

export default Counter