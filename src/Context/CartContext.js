import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider() {
  function removeFromCart() {}

  function checkout() {
    alert("thanks for shopping");
  }

  const value = {
    removeFromCart,
    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
