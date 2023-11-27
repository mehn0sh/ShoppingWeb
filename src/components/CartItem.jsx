import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import {IoIosAdd, IoMdRemove} from 'react-icons/io'
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
    let {removeFromCart,amountIncrease,amountDecrease}=useContext(CartContext)
  let { id, title, image, price, amount } = item;
  return (
    <div className="w-full py-4 border-b lg:px-6 ">
      <div className=" flex items-center gap-x-4">
        <div className="max-w-[70px]">
          <Link to={`/product/${id}`}>
            <img src={image} alt="" className="w-full" />
          </Link>
        </div>
        <div className="w-full flex items-center flex-col gap-y-2">
          <div className="flex  items-center justify-between  w-full">
            <div
              className=" text-xs uppercase max-w-[220px] hover:underline font-medium ">
              <Link to={`/product/${id}`}>
                <p>{title}</p>
              </Link>
            </div>
        <div onClick={()=>removeFromCart(id)} className='cursor-pointer'>
          <MdClose className="text-2xl  text-gray-400" />
        </div>
          </div>
              <div className="flex gap-x-2 w-full text-sm items-center">
                <div className="flex max-w-[100px] border flex-1 p-1 ">
                <div className="flex items-center w-full  justify-between">
                    <span className="cursor-pointer" onClick={()=>amountDecrease(id)}><IoMdRemove/></span>
                    {amount}
                    <span className="cursor-pointer" onClick={()=>amountIncrease(id)}><IoIosAdd/></span>
                </div>
                </div>
                <div className="flex flex-1 justify-around "> ${price}</div>
                <div className="flex flex-1 justify-end">${parseFloat(amount*price).toFixed(2)}</div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
