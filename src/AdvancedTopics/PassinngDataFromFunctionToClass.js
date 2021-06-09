import React, { Component } from "react";

export class PassinngDataFromFunctionToClass extends Component {
  render() {
    return (
      <div>
        <h1>function to class data pass , {this.props.count}</h1>
      </div>
    );
  }
}

export default PassinngDataFromFunctionToClass;
