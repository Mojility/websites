import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <img src={logo} width={150} alt="Mojility Logo"/>
    </Link>
    <Menu/>
  </header>
)

export default Header
