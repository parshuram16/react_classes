import React from "react"



const Headings=({title})=>{

    console.log("heading component re-rendering...")

    return(

        <>

        <h3>{title}</h3>
        
        </>
    )
}

export default React.memo(Headings)