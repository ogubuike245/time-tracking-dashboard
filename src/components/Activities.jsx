import React, { useContext } from "react";
import Activity from "./Activity.jsx";
import UserContext from "../context/index.jsx";

const Activities = () => {
  const { timeFrame, selectedUser } = useContext(UserContext);

  return (
    <article className="activities">
      {selectedUser.data.map((content) => {
        return (
          <Activity
            key={content.title}
            content={content}
            timeFrame={timeFrame}
          />
        );
      })}
    </article>
  );
};

export default Activities;
