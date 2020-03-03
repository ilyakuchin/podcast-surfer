import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <Header huge>404 Not found</Header>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}
