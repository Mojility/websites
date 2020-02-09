import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"

import ThemeLayout from "theme/src/components/theme_layout";

import logo from "../images/codingculture-logo.svg"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bannerImage: file(relativePath: { eq: "developer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headlines = [
    {title: "Quality or velocity problems?", byline: "Tune up your technical practices to gain traction against your technical debt."},
    {title: "How can a coach help?", byline: "An Agile Technical Coach can help you realize the capacity hidden in your teams."},
    {title: "Your agile teams not feeling so agile?", byline: "Accidental complication saps away not only productivity, but also team morale."},
    {title: "", byline: ""},
  ]

  const menuItems = [
    <Link to="/">Home</Link>,
  ]

  return (
    <ThemeLayout menuItems={menuItems}
                 headlines={headlines}
                 siteTitle={data.site.siteMetadata.title}
                 heroImage={data.bannerImage.childImageSharp.fluid}
                 logo={logo}
                 logoAlt={"CodingCulture Logo"}
    >
      {children}
    </ThemeLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
