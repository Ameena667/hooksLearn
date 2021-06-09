import React from "react";
import ChildA from "./ChildA";

function UseContextHook(props) {
  return (
    <div>
      <h1>At top level , {props.count}</h1>

      <ChildA />
    </div>
  );
}

export default UseContextHook;
