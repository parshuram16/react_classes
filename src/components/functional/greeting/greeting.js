



// const GreetingComponent=(props)=>{

//     console.log(props)


//     return(

//         <>

    
//         {props.children}
        
//         </>


//     )
// }

// export default GreetingComponent


const GreetingComponent=({children})=>{




    return(

        <>

    
        {children}
        <h3>nice to meet you</h3>
        </>


    )
}

export default GreetingComponent