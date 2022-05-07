import React from "react";
import "./Spinner.css"
import {SpinnerDotted } from 'spinners-react';




const Spinner = () => {
    return (
        <div className="spinner-container">
  <SpinnerDotted  size={80} color="F8E71C"/>
        </div>
    );
};

export default Spinner;