import React, { Component } from "react";
import { render } from "react-dom";
import Title from "./components/Title";

class Showcase extends Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}

render(<Showcase />, document.getElementById("app"));
