import { React, useState, useEffect } from "react";
import { Button } from "antd";

function UseEffectHook() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //console.log("render");
  //second parameter of useEffect hook is an array , which is optional
  //useEffect called when state chages at both intial and re-render phase
  //useEffect defnition executes only when that array state variables changes
  //if we pass empty array to useEffect , it executed only at the mounting phase
  /*useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);*/
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("resource changed");
    return () => {
      console.log("return from useEffect for  unmounting");
    };
  }, [resourceType]);
  return (
    <div>
      <Button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </Button>
      <Button
        onClick={() => {
          setResourceType("users");
        }}
      >
        Users
      </Button>
      <Button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </Button>
      <h1>{resourceType}</h1>

      <ul>
        {items.map((item) => {
          return <li>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseEffectHook;

//return <li>{JSON.stringify(item)}</li>;
