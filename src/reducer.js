const reducer =  (state,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            const productToAdd = action.payload;
            return{...state,cart:[...state.cart,productToAdd]}
        default:
             return state
    }
}
export default reducer