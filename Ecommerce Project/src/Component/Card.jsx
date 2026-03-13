import React, { useContext, useState } from "react";
import { EcomContext } from "../Context/EcomContext";
import { CartContext } from "../Context/Cart";

const Card = (props) => {
 const [cart, setCart] = useContext(CartContext)
  return (
    <div className="flex flex-col fit-content px-4 py-2 w-60 bg-amber-200 gap-4 rounded">
      <h4 className="text-2xl font-serif tracking-wider px-4 py-2">
        {props.name}
      </h4>
      <p className=" px-4 py-2 text-xl font-[apple] tracking-wide">
        Price: ${props.price}
      </p>
      <button className="px-4 py-2 bg-amber-100 rounded-2xl font-semibold cursor-pointer active:scale-95">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
