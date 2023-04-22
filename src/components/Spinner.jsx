import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
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
};
export default Spinner;
