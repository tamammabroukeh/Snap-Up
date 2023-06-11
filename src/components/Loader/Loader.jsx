import React from "react";
import "./Loader.scss";
import { loader } from "../../utils/images";
export default function Loader() {
  return (
    <div className="container">
      <div className="flex align-center justify-center loader">
        <img src={loader} alt="Loader" />
      </div>
    </div>
  );
}
