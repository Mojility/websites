const path = require('path');

module.exports = {
  siteMetadata: {
    title: "CodingCulture by Mojility Inc.",
    author: "Stacey Vetzal",
    description: "Management consulting and technical practices coaching for the agile enterprise.",
    social: []
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.resolve('./src/blog'),
      },
    },
    // {
    //   resolve: `gatsby-theme-blog-core`,
    //   options: {
    //     basePath: `/blog`,
    //     contentPath: `src/blog/blog`,
    //     assetPath: `src/blog/assets`,
    //     mdx: true,
    //   }
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
  ]
}
