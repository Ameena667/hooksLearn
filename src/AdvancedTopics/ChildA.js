import React from "react";
import ChildB from "./ChildB";
import UserConsumer from "./UserContext";
//static contextType = UserContext
function ChildA() {
  return (
    <div>
      <h1>This is inside compoent A</h1>
      <UserConsumer>
        {(username) => {
          return (
            <div>
              <h1>
                hello now the count is : {username.count} , {username.name}{" "}
              </h1>
            </div>
          );
        }}
      </UserConsumer>
      <ChildB />
    </div>
  );
}

export default ChildA;
