import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Tempo</h1>
          </Link>
          <nav>
            <button>Log in</button>
            <button>Log out</button>
            <input placeholder="Search Tempo"></input>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
