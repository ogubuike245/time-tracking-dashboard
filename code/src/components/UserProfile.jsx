import { useState, createContext, useContext } from "react";
import UserContext from "../context";

const UserProfile = () => {
  const { name } = useContext(UserContext);

  return (
    <article className="user-profile">
      <div className="user-info">
        <div className="user-avatar">
          <img src="../../public/images/user.png" alt="" />
        </div>
        <div className="user-name">
          <span>Report for</span>
          <h2>{name}</h2>
        </div>
      </div>

      <ul className="frames">
        <li className="frame">Daily</li>
        <li className="frame">Weekly</li>
        <li className="frame">Monthly</li>
      </ul>
    </article>
  );
};

export default UserProfile;
