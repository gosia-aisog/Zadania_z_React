import React from "react";
import Label from "./Label";

function Button({ onClickSendDataToParent }) {
  return (
    <button onClick={onClickSendDataToParent}>
      <Label></Label>
    </button>
  );
}

export default Button;
