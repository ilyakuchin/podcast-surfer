import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function sbmt(e) {
    e.preventDefault();
    console.log("login");
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
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
        <input type="submit" value="Submit" onClick={sbmt} />
      </form>
    </div>
  );
}
