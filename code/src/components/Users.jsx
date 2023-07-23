import { useContext } from "react";
import UserContext from "../context";

const Users = ({ users, setSelectedUser }) => {
  const { name } = useContext(UserContext);
  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <li key={user.name} className={user.name === name ? "active" : ""}>
            <button onClick={() => setSelectedUser(user)}>{user.name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
