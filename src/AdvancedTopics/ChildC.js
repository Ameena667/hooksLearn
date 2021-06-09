import React from "react";
import { UserConsumer } from "./UserContext";

function ChildC() {
  return (
    <div>
      <h1>hi , This is inside component C</h1>
      <UserConsumer>
        {(username) => {
          return (
            <h1>
              hello now the count is : {username.count} , {username.name}{" "}
            </h1>
          );
        }}
      </UserConsumer>
    </div>
  );
}

export default ChildC;
