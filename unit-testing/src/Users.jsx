import React from "react";
import User from "./User";

function Users({ users }) {
  return (
    <>
      <h1>User list</h1>
      <p>
        Number of users: <span data-testid="number-of-users">{users.length}</span>
      </p>
      {users.map((u, index) => (
        <User key={index} user={u} />
      ))}
    </>
  );
}

export default Users;
