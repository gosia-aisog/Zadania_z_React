import React from "react";

const Input = ({ onInputChange, placeholder }) => {
  return <input onChange={onInputChange} placeholder={placeholder} />;
};

export default Input;
