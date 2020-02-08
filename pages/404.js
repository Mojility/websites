import React from "react"

import Layout from "mojility.ca/src/components/layout"
import SEO from "theme/src/components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>That page doesn't exist...</p>
  </Layout>
)

export default NotFoundPage
