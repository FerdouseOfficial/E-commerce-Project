import React from "react";
import Card from "./Component/Card";
import Cart from "./Component/Cart";
import { CartContext } from "./Context/Cart";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-2 ">
      <div className="flex gap-2">
        <Card name="Macbook Pro" price="500" />
        <Card name="Pendrive" price="200" />
        <Card name="Mobile" price="1000" />
      </div>
      <Cart />
    </div>
  );
};

export default App;
