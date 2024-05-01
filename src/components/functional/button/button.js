




// const ButtonComponent = () => {


//     return(

//         <button>React Start</button>
//     )
// }

// export default ButtonComponent


// const ButtonComponent=()=><button>click me</button>

// export default ButtonComponent


// const ButtonComponent=()=>{

//     const Login=true

//     if(Login){
//         return(
//             <button>click me</button>
//         )
//     }
//     else{
//         return(
//             <button>Login failed</button>
//         )
//     }
// }

// export default ButtonComponent

// conditional rendering using if / else:

// const ButtonComponent=()=>{

//     const Login=true

//     if(!Login){
//         return(
//             <button>click me</button>
//         )
//     }
//     else{
//         return(
//             <button>Login failed</button>
//         )
//     }
// }


// import OrderList from "../listnew/ordered.list"

// //conditional rendering using ternary operator:

// const ButtonComponent=()=>{

// const Login=true

// return(
//     <>
//     {
//     Login
//     ?
//     <OrderList/>
//     :
//     <button>Login Failed</button>

//     }
//     </>

// )
// }

// export default ButtonComponent



// //conditional rendering using shortcircuit operator or logical and operator
// import OrderList from "../listnew/ordered.list"


// const ButtonComponent=()=>{


//     const Login = true

//     return(

//         <>
//         {
//             Login
//             &&
//             <OrderList/>

//         }
        
//         </>
//     )
// }

// export default ButtonComponent


// conditional rendering using shortcircuit operator or logical and operator
// import OrderList from "../listnew/ordered.list"


// const ButtonComponent=()=>{


//     const Login = true

//     return(

//         <>
//         {
//             Login
//             ?
//             <OrderList/>
//             :
//             null

//         }
        
//         </>
//     )
// }

// export default ButtonComponent




const ButtonComponent=()=>{


    const addedToCart = true

    return(

        <>
        {
            addedToCart
            ?
            <button>move to cart</button>
            :
            <button>add to cart</button>

        }
        
        </>
    )
}

export default ButtonComponent




























