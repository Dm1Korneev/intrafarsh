import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/routes">Routes</Link>
      </li>
      <li>
        <Link to="/route">Route</Link>
      </li>
      <li>
        <Link to="/place">Place</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
