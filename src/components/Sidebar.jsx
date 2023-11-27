import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isOpen, setisOpen, sidebarHandler } = useContext(SidebarContext);
  const { cart ,ClearCart,total,itemAmount} = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full  bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
    transition-all z-20 duration-500 px-4 lg-[35px] `}
    >
      <div className="flex justify-between items-center border-b py-6">
        <div className="uppercase font-semibold text-sm ">shopping Bag ({itemAmount})</div>

        <div className="cursor-pointer w-8 h-8 flex items-center ">
          <IoMdArrowRoundForward
            className="text-2xl"
            onClick={sidebarHandler}
          />
        </div>
      </div>
      <div className="flex flex-col h-[450px]  overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 font-semibold uppercase text-sm items-center">
        <div>Total : <span>${parseFloat(total).toFixed(2)}</span></div>
        <div className="transition-all duration-300">
          <button onClick={ClearCart}  className='bg-red-400 w-9 h-9 rounded-full flex items-center justify-center'>
            <FiTrash className="text-2xl text-white"/>
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-[20px] font-semibold mt-2">
      <Link to={'/cart'} className="bg-gray-200 p-3 flex items-center justify-center">view Cart</Link>
      <Link to={'/'} className="bg-black text-white p-3 flex items-center justify-center">Checkout</Link>

      </div>
    </div>
  );
};

export default Sidebar;
