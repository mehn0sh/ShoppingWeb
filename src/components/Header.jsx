import React,{useContext, useEffect,useState} from "react";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import logo from '/logo.svg'

const Header = () => {
  const { isOpen, setisOpen, sidebarHandler } = useContext(SidebarContext);
  const{itemAmount}=useContext(CartContext)
  const [isActive, setisActive] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY> 60 ? setisActive(true) :setisActive(false)
    })
  },[])
  return (
    <header className={` ${isActive ?' shadow-md bg-white' :'bg-none'} flex justify-between items-center px-5 py-2 fixed w-full z-20 transition-all`}>
      <div className="max-w-[40px] ">
        <Link to={'/'}>
        <img src={logo} alt="" />
        </Link>
      </div>
      <div onClick={() => setisOpen(!isOpen)} className='relative'>
        <BsBag className="text-2xl cursor-pointer" />
        <div className="absolute bg-red-500 rounded-full w-[20px] h-[20px]
        flex items-center justify-center top-3 right-2 text-white text-xs">
          {itemAmount}
        </div>
      </div>
    </header>
  );
};

export default Header;
