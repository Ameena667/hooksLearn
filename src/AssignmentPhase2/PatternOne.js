import React from "react";

function PatternOne() {
  return (
    <div>
      <Pattern />
    </div>
  );
}
const Pattern = () => {
  for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {}
  }
};

export default PatternOne;
