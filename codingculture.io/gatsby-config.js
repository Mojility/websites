const path = require('path');

module.exports = {
  siteMetadata: {
    title: "CodingCulture by Mojility Inc.",
    author: "Stacey Vetzal",
    description: "Management consulting and technical practices coaching for the agile enterprise."
  },
  plugins: [
    "theme",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-526826-9",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {default: path.resolve('./src/components/layout.js')},
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve('./src/pages'),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
  ]
}
