import React from "react";
import { useContext } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(
    (product) =>
      product.category == "men's clothing" ||
      product.category == "women's clothing"
  );
  return (
    <>
    <div className="w-full">
    <Hero/>
      {(products.length > 0 && (
        <section className="py-16">
          <div className=" mx-auto w-full ">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
         xl:grid-cols-5 gap-[30px] w-[80%] m-auto
         "
            >
              {filteredProducts.map((item) => {
                return <Product key={item.product} product={item} />;
              })}
            </div>
          </div>
        </section>
      )) || <>Loading data</>}
    </div>
    </>
  );
};

export default Home;
