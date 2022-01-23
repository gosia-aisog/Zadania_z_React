import React from "react";
const item = "kowalsky@wp.pl";
function UniversalInput({ inputType }) {
  console.log(typeof { item });
  if (typeof item === "text") {
    return "text";
  } else if (typeof item === "number") {
    return "number";
  } else if (typeof item === "email") {
    return "email";
  } else {
    return "range";
  }
}

export default UniversalInput;
