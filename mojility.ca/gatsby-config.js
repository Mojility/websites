module.exports = {
  siteMetadata: {
    title: "Mojility Inc.",
    author: "Stacey Vetzal",
    description: "Management consulting and technical practices coaching for the agile enterprise."
  },
  plugins: [
    "theme",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
  ],
}
