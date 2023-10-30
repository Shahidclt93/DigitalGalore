import React,{useState,useContext,useReducer,useEffect} from 'react';
import productData from './productsData';
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
    productData,
    cart:[]
    

}
const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id)=>{
        dispatch({type:'ADD_TO_CART',payload:id})
    }
    const removeFromCart = (id)=>{
        dispatch({type:'REMOVE',payload:id})
    }
    return(
        <AppContext.Provider
        value={{
            cart:state.cart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext,AppProvider}
