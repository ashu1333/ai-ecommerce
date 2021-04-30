import React, { useState } from "react";
import formatCurrency from "../utils/Currencyformat";
import Productmodal from "./Productmodal";

const ProductItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div className=" md:w-1/4 xs:w-1/2 p-4 relative ml-1 mt-4 ">
        <div className="block relative  rounded overflow-hidden ">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block"
            src={item.imageSrc}
          />
        </div>

        <div className=" flex items-end justify-between p-4">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
              {item.category}
            </h3>
            <h2 className="text-gray-900 text-lg font-medium">{item.name}</h2>
            <p className="mt-1">{formatCurrency(item.priceCents)}</p>
          </div>
          <button
            className="text-white py-2 px-4 text-lg bg-green-500 rounded hover:bg-green-700"
            onClick={() => openModal()}
          >
            Details
          </button>
        </div>
      </div>
      <Productmodal item={item} open={open} closeModal={closeModal} />
    </>
  );
};

export default ProductItem;
