import React from "react"
import DarkenedBackgroundImage from "theme/src/components/darkened-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = (props) => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "boardroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <DarkenedBackgroundImage fluid={data.bannerImage.childImageSharp.fluid}>
      <ul className="slides">
        <li>
          <h1>Management Consulting</h1>
          <h2>Balance business and technical transformation.</h2>
        </li>
        <li>
          <h1>Coaching and Training</h1>
          <h2>Uncover the hidden potential in your existing teams.</h2>
        </li>
        <li>
          <h1>Continuous Coaching Platform</h1>
          <h2>Extend your reach with reusable content, and group coaching.</h2>
        </li>
        <li>
          <h1>Primr Platform</h1>
          <h2>SMS group messaging platform for community agencies.</h2>
        </li>
      </ul>
    </DarkenedBackgroundImage>
  )
}

export default Hero