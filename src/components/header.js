import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">Branding Today</a>
      </div>

      <div className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </div>

      <nav className="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>

    </header>

  );
}

export default Header;