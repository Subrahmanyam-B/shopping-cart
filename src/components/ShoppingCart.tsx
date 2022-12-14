import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart , cartItems } = useShoppingCart();

  return (
    <div>
      <div onClick={closeCart} className = " opacity-30 w-screen h-screen absolute bg-gray-800 z-10"
         style={{
            top:0,
            right: isOpen ? 0 : -2000, 
         }} ></div>
      <nav
        style={{
          position: "absolute",
          top: 0,
          right: isOpen ? 0 : -500,
          height: "100%",
          width: 500,
          background: "#fff",
          zIndex: 20,
        }}
      >
        <button onClick={closeCart} className = "m-4 text-gray-600 hover:text-gray-900 active:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      <div className ="">
        {cartItems.map(item => (
         <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className = "font-bold text-2xl flex justify-end mr-4">
        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
          const item = storeItems.find( i => i.id === cartItem.id)
          return total + (item?.price ||0) * cartItem.quantity
        }, 0))}
      </div>
      </nav>

    </div>
  );
}
