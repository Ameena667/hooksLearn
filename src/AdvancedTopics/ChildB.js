import React from "react";
import ChildC from "./ChildC";
import UserConsumer from "./UserContext";

function ChildB() {
  return (
    <div>
      <h1>This is inside component B</h1>
      <UserConsumer>
        {(username) => {
          return (
            <h1>
              hello now the count is : {username.count} , {username.name}{" "}
            </h1>
          );
        }}
      </UserConsumer>
      <ChildC />
    </div>
  );
}

export default ChildB;
