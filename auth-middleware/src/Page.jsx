import React, { useCallback, useContext } from "react";
import { Redirect } from 'react-router';
import { AuthContext } from "./contexts";

const Page = () => {
  let { auth, setAuth } = useContext(AuthContext);

  const logout = useCallback(() => {
    setAuth({ user: null, token: null })
    delete localStorage.username
    delete localStorage.token
  })

  if (!auth.user) {
    return <Redirect to="/login-page" replace />
  }

  return (
    <>
      <div>
        Welcome {auth.user.username}, your token: {auth.token}
      </div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Page;
