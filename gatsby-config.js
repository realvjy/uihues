module.exports = {
  siteMetadata: {
    title: `uihues`,
    description: `color and gradient insipration`,
    author: `@realvjy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        url: `https://spreadsheets.google.com/feeds/cells/1WEDq6VHI4JEE7GJtJDhH1ArX2ozXeTzZWJrgCtpcVrM/1/public/full?alt=json`,
        method: `get`,
        headers: {
          "Content-Type" : `application/json`
        },
        typePrefix: `uihues_`,
        name: `posts`,
        // params: {
        //   results: 100
        // },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
