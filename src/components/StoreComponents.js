import { createContext, useEffect, useState} from "react";
import ListItem from "./ListItem";


export const StoreComponent = createContext(null)

const StoreComponentProvider = (props) => {

    const [cartItems,setCartItems]= useState({});

    const addToCart= (itemId)=>{

        if(!cartItems[itemId]) {

            setCartItems((prev)=>({...prev,[itemId]:1}))

        }

        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
           
        }

        const removeFromCart = (itemId) =>{

            setCartItems ((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
  
        useEffect(()=>{
            console.log(cartItems);
        },[cartItems])


    const contextValue = {
        ListItem,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart  
    }
    
    return (
        <StoreComponent.Provider value={contextValue}>
        {props.children}
        </StoreComponent.Provider>
    )
}



export default StoreComponentProvider;
