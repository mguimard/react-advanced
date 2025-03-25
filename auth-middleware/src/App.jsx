import React, { useState } from "react";
import { AuthContext } from "./contexts";
import LoginForm from "./LoginForm";
import Page from "./Page";

const initialState = {
  token: null,
  user: null,
};

function App() {
  const [auth, setAuth] = useState(initialState);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {auth.user ? <Page /> : <LoginForm />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
