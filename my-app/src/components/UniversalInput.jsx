import React from "react";
function UniversalInput({ inputType }) {
  console.log(inputType);
  if (inputType === "text") {
    return <input type="text" />;
  } else if (inputType === "number") {
    return <input type="number" />;
  } else if (inputType === "email") {
    return <input type="email" />;
  } else {
    return <input type="range" />;
  }
}

export default UniversalInput;
