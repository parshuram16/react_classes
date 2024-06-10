





const initialState={
    cart:[]
}

export const cartReducer=(state=initialState,action)=>{

    switch(action.type){

        case "ADD_TO_CART":

        const userAddedId=action.payload.id
        const alreadyInCart=state.cart.find(product=>product.id===userAddedId)

        if(alreadyInCart){
            return state
        }
            return {...state,cart:[...state.cart,action.payload]}
            

        case "DELETE_FROM_CART":
            const id = action.payload

            const newCart = state.cart.filter(eachProduct=>eachProduct.id!==id)
            return {...state,cart:newCart}


        default:
            return state

    }

}