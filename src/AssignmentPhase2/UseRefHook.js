import { React, useState, useRef } from "react";

function useRefHook() {
  const [name, setName] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const inputRef = useRef();
  //const renderCount = useRef(1);

  /*useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });*/
  //<div>i rendered {renderCount.current} times</div>
  /*onChange={(e) => 
    setName(e.target.value);
  }
  /*useEffect(() => {
    console.log(inputRef.current.value);
  });*/
  //<input value={nameTwo} onChange={(e) => setNameTwo(e.target.value)} />
  const addName = () => {
    setName(inputRef.current.value);
  };
  return (
    <div>
      <h1>using ref</h1>
      <input ref={inputRef} />
      <div>my name is {name}</div>
      <button onClick={addName}>addName</button>
      <h1>using onchange</h1>

      <input onChange={(e) => setNameTwo(e.target.value)} />
      <div>my name is {nameTwo}</div>
    </div>
  );
}

export default useRefHook;
