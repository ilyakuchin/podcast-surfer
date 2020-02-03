import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import ConnectedLogin from '../Login/Login';
import ConnectedSignup from '../Signup/Signup';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function UnauthenticatedApp() {
  return (
    <Container>
      <Route path='/' component={ConnectedLogin} exact />
      <Route path='/signup' component={ConnectedSignup} />
    </Container>
  );
}
