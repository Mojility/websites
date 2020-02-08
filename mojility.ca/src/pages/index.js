import React from "react"

import Layout from "../components/layout"
import SEO from "theme/src/components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Welcome</h1>
    <p>
      Mojility provides executive level and on-the ground support for managers of software teams, geared towards
      building a stable and sustainable culture for your growing local workforce.
    </p>
    <p>
      Foster an internal culture of software craftsmanship. Help developers connect with the humanity and diversity on
      their teams, inspiring them to build better software together. Build effective apprenticeship programs that
      engage, retain and improve your current software developers.
    </p>
    <p>
      You want your team to build better software. They want to build better software. Let’s together find a way to make
      that happen for you.
    </p>
  </Layout>
)

export default IndexPage
