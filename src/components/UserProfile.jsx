import { useContext } from "react";
import UserContext from "../context";

const UserProfile = () => {
  const { selectedUser, setTimeFrame, timeFrame } = useContext(UserContext);

  return (
    <article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="user-profile"
    >
      <div className="user-info">
        <div className="user-avatar">
          <img src={selectedUser.avatar} alt={selectedUser.name} />
        </div>
        <div className="user-name">
          <span>Report for</span>
          <h2>{selectedUser.name}</h2>
        </div>
      </div>

      <ul className="frames">
        <li
          className={timeFrame === "daily" ? "frame active" : "frame"}
          onClick={() => setTimeFrame("daily")}
        >
          Daily
        </li>
        <li
          className={timeFrame === "weekly" ? "frame active" : "frame"}
          onClick={() => setTimeFrame("weekly")}
        >
          Weekly
        </li>
        <li
          className={timeFrame === "monthly" ? "frame active" : "frame"}
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </li>
      </ul>
    </article>
  );
};

export default UserProfile;
