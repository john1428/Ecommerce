import React, {createContext, useState, useEffect} from 'react'

import all_product from '../assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};

    for(let index=0;index<all_product.length;index++){
        cart[index] = 0;
    }

    return cart;
}



const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart());




    const addToCart = (itemId) =>{
        setCartItems((prev) => ({
            ...prev,
            [itemId] : prev[itemId]+1
        }))

        console.log("added item with id",itemId)
        console.log("Total items",cartItems)

    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({
            ...prev,
            [itemId] : 0
        }))
    }


    const getTotalCartItems = () => {
        let totalCartItems = 0;

        for(const item in cartItems){
            if(cartItems[item]>0){
                totalCartItems+=cartItems[item];
            }
        }

        return totalCartItems
    }

    const getCartTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = (all_product.find((product)=>product.id==Number(item)))
                totalAmount+=(iteminfo.new_price)*cartItems[item]
            }
            
        }
        return totalAmount
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getCartTotalAmount,getTotalCartItems};

    console.log(cartItems);




    return(
        <ShopContext.Provider value={contextValue}>
                {props.children}
        </ShopContext.Provider>
    )
} 


export default ShopContextProvider;
