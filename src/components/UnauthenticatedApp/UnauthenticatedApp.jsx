import React from 'react';
import { Route } from 'react-router-dom';
import ConnectedLogin from '../Login/Login';
import ConnectedSignup from '../Signup/Signup';

export default function UnauthenticatedApp() {
  return (
    <div>
      <Route path='/' component={ConnectedLogin} exact />
      <Route path='/signup' component={ConnectedSignup} />
    </div>
  );
}
