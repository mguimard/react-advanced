import React, { useContext } from "react";
import { AuthContext } from "./contexts";

const Page = () => {
  let { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <div>
        Welcome {auth.user.username}, your token: {auth.token}
      </div>
      <button onClick={() => setAuth({ user: null, token: null })}>Logout</button>
    </>
  );
};

export default Page;
