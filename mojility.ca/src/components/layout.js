import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "theme/src/components/hero"
import Menu from "./menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <Hero image={"boardroom.jpg"}/>
      <div className="page-wrapper">
        <div className="page-content">
          <main>{children}</main>
        </div>
        <footer>
          <Menu/>
          <span className="copyright">
            Copyright © 2002 - {new Date().getFullYear()} Mojility Inc.
          </span>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
