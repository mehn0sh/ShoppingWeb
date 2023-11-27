import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import {IoIosAdd, IoMdRemove} from 'react-icons/io'


const CartList = () => {
  const { cart, ClearCart, total, itemAmount } = useContext(CartContext);
  let { removeFromCart, amountIncrease, amountDecrease } =
    useContext(CartContext);
if (cart.length==0) return <div className="mx-auto flex flex-col lg:flex-row items-center justify-center h-screen"> Cart is empty
<br/>
Back to store
</div>
  return (
    <div className=" flex flex-col  py-20">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row items-center p-10 border-b"
        >
          <div className=" flex items-center justify-center mr-3">
            <img src={item.image} className="max-w-[60px] " alt="" />
          </div>
          <div >
            <p className=" text-xs uppercase  hover:text-gray-400 font-medium mt-3 leading-loose ">{item.title}</p>
            <div className="mt-7 flex items-center justify-evenly  gap-3 w-[250px]">
            <div onClick={() => removeFromCart(item.id)} className="cursor-pointer w-fit">
              <FaRegTrashAlt className="text-xl  text-gray-400" />
            </div>
            <div className="flex max-w-[100px] border flex-1 p-1 ">
                <div className="flex items-center w-full  justify-between">
                    <span className="cursor-pointer" onClick={()=>amountDecrease(item.id)}><IoMdRemove/></span>
                    {item.amount}
                    <span className="cursor-pointer" onClick={()=>amountIncrease(item.id)}><IoIosAdd/></span>
                </div>
                </div>
                <div className="flex flex-1 justify-around "> ${item.price}</div>
                <div className="flex flex-1 justify-end">${parseFloat(item.amount*item.price).toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}
          <div className="flex justify-evenly mt-3 font-semibold uppercase text-sm items-center">
        <div>Total : <span>${parseFloat(total).toFixed(2)}</span></div>
        <div className="transition-all duration-300">
          <button onClick={ClearCart}  className='bg-red-400 w-9 h-9 rounded-full flex items-center justify-center'>
            <FaRegTrashAlt className="text-2xl text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
