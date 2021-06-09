import { React, useState, useEffect } from "react";
import { Button } from "antd";

const initialCount = () => {
  console.log("useState called");
  return 0;
};
//useState can take const , string , objects , functions...
//if we want to pass function , don't call it  directly
//y function passed to useState : when out intial values needs some
//computation to be performed.
const HookCounter = () => {
  //const initialVal = 0;
  const [count, setCount] = useState(initialCount);
  /* useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });*/
  return (
    <div>
      <h1>counter example using hooks with increment and decrement by 1</h1>
      <h2>{count}</h2>
      <p>
        <Button
          type="primary"
          onClick={() => {
            setCount((count) => count - 1);
          }}
        >
          Decrement
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Increment
        </Button>
      </p>
    </div>
  );
};

export default HookCounter;
