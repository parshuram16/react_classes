
// import "./heading.css"

import styles from "./heading.module.css"




// const Heading1=()=>{

//     return <h2 style={

//         {

//             color:"red",
//             backgroundColor:"black"
//         }
//     }>hello</h2>
// }

const Heading1=()=>{

    const headingStyle={

        color:"red",
        backgroundColor:"black"
    }

    return( 
        <>
    <h2 style={

        headingStyle
        
    }>hello</h2>

<h2 style={

headingStyle

}>ram</h2>

</>

)
}

export const Heading2=()=>{

    const blackColor=true

    return <h2 className={
        
        blackColor?
        "headingStyles":
        "headingStylenew"
    }>abhi</h2>
}


export const Heading3=()=>{

    return <h2 className={styles.myStyles}>parshi</h2>
}

export default Heading1

