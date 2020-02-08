import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"

import ThemeLayout from "theme/src/components/theme_layout";

import logo from "theme/src/images/mojility-logo.svg"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bannerImage: file(relativePath: { eq: "boardroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headlines = [
    {title: "Management Consulting", byline: "Balance business and technical transformation."},
    {title: "Coaching and Training", byline: "Uncover the hidden potential in your existing teams."},
    {title: "Continuous Coaching Platform", byline: "Extend your reach with reusable content, and group coaching."},
    {title: "Primr Platform", byline: "SMS group messaging platform for community agencies."},
  ]

  const menuItems = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>,
    <a href="https://codingculture.io/">Coaching</a>,
    <Link to="/contact">Contact</Link>
  ]

  return (
    <ThemeLayout menuItems={menuItems}
                 headlines={headlines}
                 siteTitle={data.site.siteMetadata.title}
                 heroImage={data.bannerImage.childImageSharp.fluid}
                 logo={logo}
                 logoAlt={"Mojility Logo"}
    >
      {children}
    </ThemeLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
