import React, { useContext, useState } from "react";
import { EcomContext } from "../Context/EcomContext";

const Card = () => {
  // const [{ addcart: name, setAddcart: setname }] = useContext(EcomContext);
  return (
    <div className="flex flex-col justify-center  items-center h-screen ">
      <div className="h-1/2 w-1/2 bg-amber-400 flex flex-col justify-center gap-4 items-center">
        <h4 className="text-2xl font-serif tracking-wider px-4 py-2">
          Item name
        </h4>
        <p className="text-xl font-[apple] tracking-wide">Price: $10</p>
        <button className="px-4 py-2 bg-amber-100 rounded-2xl font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
