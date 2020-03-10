import {Link} from "gatsby"
import React from "react"
import Menu from "theme/src/components/menu"

const Header = ({logo, logoAlt, menuItems}) => (
  <header>
    <Link to="/">
      <img src={logo} alt={logoAlt}/>
    </Link>
    <Menu>{menuItems}</Menu>
  </header>
)

export default Header
