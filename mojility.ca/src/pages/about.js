import React from "react"

import Layout from "../components/layout"
import SEO from "theme/src/components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About"/>
      <div>
        <h2>About Mojility Inc.</h2>
        <p>
          Mojility was founded as Three Wise Men, started by Stacey Vetzal in 2002 in Oshawa, Ontario.
        </p>
        <p>
          For 17 years we have serviced Durham Region and the Greater Toronto Area as a software consultancy. Over that
          time we completed hundreds of projects for dozens of clients using a wide range of technologies.
        </p>
        <p>
          Our internship and apprenticeship programs gave young developers in the area a start. We were even featured by
          the Durham Region Economic Development in 2009 as part of an tech firm attraction strategy.
        </p>
        <p>
          Recognizing the incredible growth of mobile and IoT technologies, and the strength of both our technical and
          company agility, we rebranded as Mojility Inc in 2013.
        </p>
        <h2>About Stacey Vetzal</h2>
        <Img style={{ width: "150px", float: "right" }} fluid={data.placeholderImage.childImageSharp.fluid}/>
        <p>
          Stacey Vetzal founded Mojility Inc. in 2002 to pursue her passion for software development after an eclectic
          career trajectory including product management, digital video systems and server integration, digital video
          and film effects systems integration, and digital asset management.
        </p>
        <p>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
