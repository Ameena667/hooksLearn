import { React, useState, useEffect, useMemo } from "react";
import { Button } from "antd";

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <Button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        change Theme
      </Button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i < 10; i++) {}
  return num * 2;
}
export default UseMemoHook;
