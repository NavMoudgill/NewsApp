import "./App.css";
import React, { Component } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./routing-config";

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
