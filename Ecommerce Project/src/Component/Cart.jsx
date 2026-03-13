import React from "react";

const Cart = (props) => {
  return (
    <div className="flex items-center justify-center mt-5">
      <li>
        <h2>
          {/* {props.name} - ${props.price} */}
          Macbook Pro - $4400
        </h2>
        <h5>
            {/* Total Bill: ${props.price} */}
            Total Bill: $
        </h5>
      </li>
    </div>
  );
};

export default Cart;
