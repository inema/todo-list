import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-wrapper indigo lighten-2">
      <div className="container">
        <ul className="right">
          <li><Link to="/">Todo's</Link></li>
          <li><Link to="/completed">Completed</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar);
