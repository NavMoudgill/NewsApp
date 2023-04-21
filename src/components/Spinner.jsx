import React, { Component } from "react";
import loading from "./loading.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img
          src={loading}
          alt="loading"
          style={{
            width: "3rem",
            height: "3rem",
            justifyContent: "center",
            alignContent: "center",
          }}
        />
      </div>
    );
  }
}
