import { useMemo, useState } from "react"


const UseMemoExample=()=>{


    const [counter1,setCounter1]=useState(1)
    const [counter2,setCounter2]=useState(1)


    const changeCounter1=()=>{

        setCounter1(counter1+1)
    }

    const changeCounter2=()=>{

        setCounter2(counter2+1)
    }

    

    const checkEven=useMemo( ()=>{

        console.log("checking Even ...")
        return counter1%2===0?"EVEN":"ODD"
    },[counter1])


    return(

        <>

        <h2>use memo example</h2>

        <h2>current counter1 value ---- {counter1} {checkEven}</h2>
        <h2>current counter2 value ---- {counter2} </h2>
        

        <button onClick={changeCounter1}>Change counter1</button>

        <button onClick={changeCounter2}>Change counter2</button>
        
        </>
    )


}

export default UseMemoExample