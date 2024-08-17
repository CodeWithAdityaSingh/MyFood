import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const CardPopUp = () => {
  let selector = useSelector((store) => store.cart.cartItems);
  let dispatch = useDispatch();
  return (
    <div className="card bg-green-300 text-white w-6/12 flex  items-center font-bold justify-between">
      <div>
        <div>{selector.length} item Added</div>
        <div
          className="text-red-300 cursor-pointer"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart🛒
        </div>
      </div>
      <Link to={"/cart"}>
        {" "}
        <div className="flex items-center gap-2">
          View Cart{" "}
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYPsNmhIn5Fnqa_Dic3BDBz8S5qiLH_E-7Q&s"
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default CardPopUp;
