import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirectToSearch, setIsRedirectToSearch] = useState(false);

  const value = useContext(AuthContext);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return !isRedirectToSearch ? (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
          name="uname"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          name="pswrd"
          required
        />
        <input
          type="submit"
          value="Submit"
          onClick={e =>
            value.login(e, username, password, () =>
              setIsRedirectToSearch(true)
            )
          }
        />
      </form>
    </div>
  ) : (
    <Redirect to="/search" />
  );
}
