import React from "react"
import PropTypes from "prop-types"

import Header from "theme/src/components/header"
import Hero from "theme/src/components/hero"
import Menu from "theme/src/components/menu"

const ThemeLayout = ({siteTitle, logo, logoAlt, menuItems, heroImage, headlines, children}) => (
  <div>
    <Header logo={logo} logoAlt={logoAlt} menuItems={menuItems} siteTitle={siteTitle}/>
    <Hero fluid={heroImage} headlines={headlines}/>
    <div className="page-wrapper">
      <div className="page-content">
        <main>{children}</main>
      </div>
      <footer>
        <Menu>{menuItems}</Menu>
        <span className="copyright">
            Copyright © 2002 - {new Date().getFullYear()} Mojility Inc.
          </span>
      </footer>
    </div>
  </div>
)

ThemeLayout.propTypes = {
  siteTitle: PropTypes.node.isRequired,
  menuItems: PropTypes.node.isRequired,
  fluid: PropTypes.node.isRequired,
  headlines: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default ThemeLayout
