







export const addToCartAction=(product)=>{

    return{

        

        type: "ADD_TO_CART",
        payload:product
    }
}


export const deleteFromCartAction=(id)=>{

    return{

        type: "DELETE_FROM_CART",
        payload:id
    }
}