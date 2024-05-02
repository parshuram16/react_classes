



// const ButtonNew=(props)=>{

//     console.log(props,"props")


//     return(

//         <>

//         <button style={{
//             backgroundColor:props.bgColor,
//             width:props.buttonProperties.width,
//             height:props.buttonProperties.height
//         }}>{props.buttonText}</button>


        
//         </>
//     )
// }

// export default ButtonNew



const ButtonNew=(props)=>{

    console.log(props,"props")

    const {text,bgColor,buttonProperties:{width,height}}=props


    return(

        <>

        <button style={{
            backgroundColor:bgColor,
            width:width,
            height:height
        }}>{text}</button>


        
        </>
    )
}

export default ButtonNew
