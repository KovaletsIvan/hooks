import React, { useContext } from "react";

import MyContext from "../../MyContext";

import "./counter.scss";

const Counter = ({ count, counted, dispatch }) => {
  const value = useContext(MyContext);

  return (
    <div className="counter">
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
      <span>{counted}</span>
      <span>{value}</span>
    </div>
  );
};
export default Counter;
