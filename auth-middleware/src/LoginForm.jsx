import React, { useContext } from "react";
import { AuthContext } from "./contexts";

const LoginPage = () => {
  let { setAuth } = useContext(AuthContext);

  const login = async (username, password) => {
    let res = await fetch("http://localhost:3001/login", { method: "POST" });
    let token = await res.text();
    console.log("Got token", token);
    setAuth({ user: { username }, token });
  };

  return (
    <>
      React
      <div>Please log in</div>
      <div>
        Username <input type="text" />
        Password <input type="password" />
        <button onClick={() => login("alice", "123456")}>Log in</button>
      </div>
    </>
  );
};

export default LoginPage;
