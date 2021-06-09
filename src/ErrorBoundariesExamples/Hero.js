import React from "react";

//{name}
function Hero({ name }) {
  if (name === "rehan") {
    throw new Error("Not a hero.......................");
  }
  return <div>{name}</div>;
}

export default Hero;
