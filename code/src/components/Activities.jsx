import React, { useContext } from "react";
import Activity from "./Activity.jsx";
import UserContext from "../context/index.jsx";
import { AnimatePresence } from "framer-motion";

const Activities = () => {
  const { data } = useContext(UserContext);

  return (
    <AnimatePresence>
      <article className="activities">
        {data.map((content) => {
          return (
            <Activity transition={0.5} key={content.title} content={content} />
          );
        })}
      </article>
    </AnimatePresence>
  );
};

export default Activities;
