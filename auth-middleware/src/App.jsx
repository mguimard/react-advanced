import React, { useState } from "react";
import { AuthContext } from "./contexts";
import LoginForm from "./LoginForm";
import Page from "./Page";

const initialState = {
  token: localStorage.token || null,
  user: localStorage.username ? { username: localStorage.username } : null,
  pizzas: []
};

function App() {
  const [auth, setAuth] = useState(initialState);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth, meteo: 'soleil' }}>

        {auth.user ? <Page /> : <LoginForm />}

      </AuthContext.Provider>
    </>
  );
}

export default App;
