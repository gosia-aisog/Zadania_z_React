import React from "react";
import listItemsData from "../data/ThirdLessonData";

const ModificationList = (isOrdered) => {
  return isOrdered ? (
    <ol>
      {listItemsData.map((surname) => (
        <li key={surname}>{surname}</li>
      ))}
    </ol>
  ) : (
    <ul>
      {listItemsData.map((surname) => (
        <li key={surname}>{surname}</li>
      ))}
    </ul>
  );
};

export default ModificationList;
