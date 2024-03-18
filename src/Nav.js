import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, SetSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Form"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newpost">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
