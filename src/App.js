import React, { useState } from "react";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AuthenticatedApp from "./AuthenticatedApp";
import axios from "axios";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

export default function App() {
  const [username, setUsername] = useState();
  const [jwt, setJWT] = useState();
  const [rss, setRSS] = useState();

  let contextValue = {
    username: username,

    setUsername: setUsername,

    login(e, username, password, callback) {
      e.preventDefault();

      setUsername(username);
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          username,
          password
        })
        .then(res => {
          window.localStorage.setItem("podcast_jwt", res.data.token);
          setJWT(window.localStorage.getItem("podcast_jwt"));
          callback();
        });
    },

    jwt: jwt,
    rss: rss,

    setRSS: setRSS,

    register() {
      console.log("register");
    },

    logout() {
      setUsername(null);
      window.localStorage.removeItem("podcast_jwt");
    }
  };
  return (
    <AuthProvider value={contextValue}>
      <Router history={history}>
        <Switch>
          {username ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Switch>
      </Router>
    </AuthProvider>
  );
}
