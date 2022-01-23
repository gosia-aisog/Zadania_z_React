import React from "react";
import listItemsData from "../data/ThirdLessonData";

const List = () => {
  return (
    <ul>
      {listItemsData.map((surname) => (
        <li key={surname}>{surname}</li>
      ))}
    </ul>
  );
};

export default List;
