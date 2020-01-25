import React from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider(props) {
  console.log(props);

  return (
    <AuthContext.Provider value={props.value}>
      {props.children}
    </AuthContext.Provider>
  );
}
