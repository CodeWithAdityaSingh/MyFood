import React, { useRef } from "react";
import { addFilterinfo } from "../utils/ResDataSlice";
import { useDispatch, useSelector } from "react-redux";

const MiddleBodyHeader = () => {
  let searchItems = useRef(null);

  let dispatch = useDispatch();

  let selector = useSelector((store) => store.resData.resInfo);
  return (
    <div className="flex justify-evenly h-40 w-full p-4 items-center">
      <div>
        <h1 className="font-bold text-2xl">Welcome,Aditya</h1>
        <span className="text-sm text-slate-700">
          Discover what you need Easily
        </span>
      </div>
      <div className="flex items-center shadow-xl p-2">
        <input
          className="h-full p-2"
          ref={searchItems}
          type="text"
          placeholder="Search Products"
        ></input>
        <button
          onClick={() => {
            let data = selector.filter((items) => {
              return items.info.name
                .toLowerCase()
                .includes(searchItems.current.value.toLowerCase());
            });

            dispatch(addFilterinfo(data));
          }}
        >
          <img
            className="w-12 shadow-xl border-2 p-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-pjNh9Ap412zXaR0gCK7NkFPB-Snmr6lsA&s"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default MiddleBodyHeader;
