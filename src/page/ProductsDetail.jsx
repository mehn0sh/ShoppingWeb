import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import NoteFound from "../components/NoteFound/NoteFound";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
const ProductsDetail = () => {
  const { id } = useParams();
  const { products, isLoading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id == parseInt(id));
  console.log(product);
  if (isLoading) {
    return (
      <section className="flex items-center justify-center w-full font-semibold">
        Loading... &nbsp; <Loader />
      </section>
    );
  }
  if (!product) {
    return (
      <section className="flex items-center justify-center h-screen font-semibold">
        {" "}
        <NoteFound />
      </section>
    );
  }
  const { image, title, price, description } = product;
  return (
    <section className="py-28 lg:py-10 mb-[100px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 flex items-center justify-center">
          <img src={image} className="max-w-[200px] lg:max-w-sm" alt="" />
        </div>
        <div className="flex-1 text-center lg:text-left px-10">
          <h1 className="text-[26px] font-medium mb-5 mx-auto ">{title}</h1>
          <div className="font-light text-xl mb-6 text-gray-400">$ {price}</div>
          <p className="mb-8 leading-relaxed ">{description}</p>
          <div className="block">
            <button
              onClick={() => addToCart(product, product.id)}
              className="border px-6 py-3 text-white bg-black hover:bg-slate-500 hover:scale-110 transition-all "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
