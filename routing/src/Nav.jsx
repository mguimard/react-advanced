import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="page1">Page 1</Link>
      </li>
      <li>
        <Link to="page2">Page 2</Link>
      </li>
    </ul>
  );
}

export default Nav;
