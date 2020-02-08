import React from "react"

import Layout from "../components/layout"
import SEO from "theme/src/components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact"/>
    <div>
      <h1>Business Contact Information</h1>
      <p>
        Phone (Toronto): (647) 660-3223<br />
        Email: <a href="mailto:info@mojility.ca">info@mojility.ca</a>
      </p>
    </div>
  </Layout>
)

export default ContactPage
