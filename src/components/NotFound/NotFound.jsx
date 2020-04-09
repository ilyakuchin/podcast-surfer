import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <Header as='h1' textAlign='center'>
        404 Not found
      </Header>
      <Header as='h3' textAlign='center'>
        <Link to='/'>Home</Link>
      </Header>
    </div>
  );
}
