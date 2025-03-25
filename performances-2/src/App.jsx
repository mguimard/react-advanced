import React, { useState } from "react";
import Search from "./Search";

const initialUsers = ["alice", "bob", "joe", "kitty", "meh"];

function App() {
  let [users, setUsers] = useState(initialUsers);

  let handleChange = (event) => {
    const filteredUsers = initialUsers.filter((u) => u.includes(event.target.value));
    setUsers(filteredUsers);
  };

  return (
    <>
      <Search onChange={handleChange} />
      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
