import React from "react"
import { Link } from "gatsby"

const Menu = (props) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <a href="https://codingculture.io/">Coaching</a>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Menu;