import React from "react";
import { useState } from "react";

import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  displaymodal,
  initialportal,
  deleteportal,
  checkedportal,
} from "./Rudex";

const Portal = () => {
  const count = useSelector((state) => state.counter.value);
  const pr = useSelector((state) => state.counter.price);
  const dis = useSelector((state) => state.counter.isportaldispaly);

  const del = useSelector((state) => state.counter.delete);

  const checked = useSelector((state) => state.counter.checked);

  const dispatch = useDispatch();
  let result = count * 125;

  if (count === 0 || del === true) {
    return (
      <div id="modal" style={{ display: dis }}>
        <p>Cart</p>
        <hr></hr>
        <div id="text-main">
          <p id="text">Your cart is empty</p>
        </div>
      </div>
    );
  }

  if (checked === true) {
    return (
      <div id="modal" style={{ display: dis }}>
        <p>Cart</p>
        <hr></hr>
        <div id="text-main">
          <p id="text">Order Confirmed</p>
        </div>
      </div>
    );
  } else {
    return (
      <div id="modal" style={{ display: dis }}>
        <p>Cart</p>
        <hr></hr>

        <div id="text-main">
          <div id="arr">
            <div id="num">
              <p id="pp">fall limited edition sneakers</p>
              <span id="f">$125.00</span>
              <img src="icon-close.svg" width={"9px"} height={"10px"} />
              <span id="c"> {count}</span>
              <span id="r">${result}.00</span>
              <img
                onClick={() => dispatch(deleteportal())}
                id="de"
                src="icon-delete.svg"
              />
            </div>
            <button onClick={() => dispatch(checkedportal())} id="bt">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Portal;
