import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>404 Not found</h2>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
    </div>
  );
}
