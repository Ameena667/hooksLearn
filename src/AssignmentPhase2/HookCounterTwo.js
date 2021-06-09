import { React, useState } from "react";
import { Button } from "antd";

function HookCounterTwo() {
  const initialVal = 0;
  const [count, setCount] = useState(initialVal);
  return (
    <div>
      <h1>counter example using hooks with Increment and Decrement by 5</h1>
      <h2>{count}</h2>
      <p>
        <Button
          onClick={() => {
            setCount(count - 5);
            //setCount(count - 5);
          }}
        >
          Decrement by 5
        </Button>
        <Button
          onClick={() => {
            setCount(initialVal);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            setCount(count + 5);
          }}
        >
          Increment by 5
        </Button>
      </p>
    </div>
  );
}

export default HookCounterTwo;
