import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
const Product = ({ product }) => {
  const{addToCart} =useContext(CartContext)
  const { id, title, image, price, category } = product;
  return (
    <div>
      <div className="relative border border-[#e4e4e4] h-[300px] flex items-center flex-col justify-center group">
        <div className="w-[200px] mx-auto flex justify-center">
          <img
            src={image}
            alt=""
            className="max-h-[160px] group-hover:scale-110 duration-300 transition"
          />
        </div>
        <div
          className="absolute top-1 right-0 p-2 flex flex-col 
          gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300
            group-hover:right-1"
        >
          <button onClick={()=>{addToCart(product,id)}}>
            <div className="text-white w-9 h-9 flex items-center justify-center bg-red-500 rounded-sm">
              <BsPlus className="text-2xl" />
            </div>
          </button>

          <Link to={`product/${id}`}>
            <div className="bg-white w-9 h-9 flex items-center justify-center drop-shadow-xl rounded-sm">
              <BsEyeFill />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-sm capitalize mb-1">
            {category}
        </div>
        <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <span className="font-semibold"> $ {price}</span>
      </div>
    </div>
  );
};

export default Product;
