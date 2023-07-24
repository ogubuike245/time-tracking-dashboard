import { useContext } from "react";
import UserContext from "../context";

const Users = ({ users }) => {
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  const handleSelectUser = (person) => {
    setSelectedUser(person);
  };
  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <li
            key={user.name}
            className={user.name === selectedUser.name ? "active" : ""}
          >
            <button onClick={() => handleSelectUser(user)}>{user.name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
