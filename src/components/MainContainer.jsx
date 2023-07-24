import { useState } from "react";

// LOCAL IMPORTS
import UserProfile from "./UserProfile.jsx";
import Activities from "./Activities.jsx";

// JSON
import users from "../users.json";
import Users from "./Users.jsx";
import { UserProvider } from "../context/index.jsx";
const MainContainer = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [timeFrame, setTimeFrame] = useState("weekly");

  return (
    <UserProvider
      value={{
        selectedUser,
        timeFrame,
        setTimeFrame,
        setSelectedUser,
      }}
    >
      <Users users={users} />

      <section className="container">
        <UserProfile />
        <Activities />
      </section>
    </UserProvider>
  );
};

export default MainContainer;
