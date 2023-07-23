import React, { createContext, useState } from "react";

// LOCAL IMPORTS
import UserProfile from "./UserProfile.jsx";
import Activities from "./Activities.jsx";

// JSON
import users from "../users.json";
import Users from "./Users.jsx";
import { UserProvider } from "../context/index.jsx";
const MainContainer = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <section className="container">
      <UserProvider value={selectedUser}>
        <Users users={users} setSelectedUser={setSelectedUser} />

        <UserProfile />
        <Activities />
      </UserProvider>
    </section>
  );
};

export default MainContainer;
