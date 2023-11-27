import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount, setitemAmount] = useState(0);
 const [cart ,setcart] = useLocalStorage()
  const [total, settotal] = useState(0);
  useEffect(()=>{
    if(cart){

      let cartAmount=cart.reduce((acc,curr)=>{
        return acc+curr.amount
      },0)
      setitemAmount(cartAmount)
    }
  },[cart])
  useEffect(()=>{
    let totalPrice=cart.reduce((acc,curr)=>{
      return acc+(curr.amount * curr.price)
    },0)
    settotal(totalPrice)
  },[cart])
  const addToCart = (product, id) => {
    let newItem = { ...product, amount: 1 };
    let cartItem = cart.find((item) => item.id == id);
    if (!cartItem) {
      setcart([...cart, newItem]);
    } else {
      let updatedCart = [...cart];
      let newCart = updatedCart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      setcart(newCart);
    }
  };
  const removeFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setcart(newCart);
  };
  const ClearCart = () => {
    setcart([]);
  };
  const amountIncrease = (id) => {
    let cartItem = cart.find((item) => item.id == id);
    addToCart(cartItem, id);
  };
  const amountDecrease = (id) => {
    let cartItem = cart.find((item) => item.id == id);
    let updatedCart = [...cart];
    let newCart = updatedCart.map((item) => {
      if (item.id == id) {
        
          return { ...item, amount: cartItem.amount - 1 };
        
      } else return item;
    });
    setcart(newCart)
    if(cartItem.amount<2){
      removeFromCart(id)
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        ClearCart,
        amountIncrease,
        amountDecrease,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
