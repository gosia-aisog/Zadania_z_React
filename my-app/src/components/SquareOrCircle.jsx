import React from "react";

const SquareOrCircle = ({ isSquare }) => {
  return (
    <div
      style={
        isSquare
          ? {
              width: 200,
              height: 200,
              backgroundColor: "#60a832",
            }
          : {
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "#60a832",
            }
      }
    />
  );
};

export default SquareOrCircle;
