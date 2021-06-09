import { React, useState } from "react";
import { Button } from "antd";

function HookCounterThree() {
  const [state, setState] = useState({ count: 0, theme: "blue" });
  const [count, theme] = [state.count, state.theme];
  //const theme = state.theme;
  return (
    <div>
      <h1>hooks with objects</h1>
      <h2>
        {count} , {theme}
      </h2>
      <p>
        <Button
          onClick={() => {
            setState((prevState) => {
              return { ...prevState, count: prevState.count - 1 };
            });
          }}
        >
          Decrement
        </Button>
        <Button
          onClick={() => {
            setState((prevState) => {
              return { ...prevState, count: 0 };
            });
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            setState((prevState) => {
              return { ...prevState, count: prevState.count + 1 };
            });
          }}
        >
          Increment
        </Button>
      </p>
    </div>
  );
}

export default HookCounterThree;
