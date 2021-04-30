import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ items }) => {
  return (
    <section className="text-gray-700 body-font">
      <nav class="flex justify-center flex-wrap mt-4 mb-8 text-white">
        <div class="h-10 mr-2 px-3 py-2 bg-blue-400 hover:bg-blue-600 text-center -skewx-20 rounded-lg shadow-lg">
          Home
        </div>
        <div class="h-10 mr-2 px-3 py-2 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20 rounded-lg shadow-lg">
          About
        </div>
        <div class="h-10 mr-2 px-3 py-2 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20 rounded-lg shadow-lg">
          Contact us
        </div>
        <div class="h-10 mr-2 px-3 py-2 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20 rounded-lg shadow-lg">
          Suport
        </div>
      </nav>
      <div className="container mx-auto px-4 py-24  ">
        <div className="flex justiyf-center flex-wrap justify  mt-4 mb-8  p-2 justify-around ">
          {items.map((item) => (
            <>
              <ProductItem key={item.id} item={item} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
