module.exports = {
  siteMetadata: {
    title: `uihues`,
    description: `uihues is collection of beautiful handcrafted colors and gradients`,
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
        background_color: `#f6f6f6`,
        theme_color: `#1c1c1c`,
        display: `minimal-ui`,
        icon: `uihues.png`, // This path is relative to the root of the site.
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
        entitiesArray: [
          {
            url: `https://spreadsheets.google.com/feeds/cells/1WEDq6VHI4JEE7GJtJDhH1ArX2ozXeTzZWJrgCtpcVrM/2/public/full?alt=json`,
            method: `get`,
            headers: {
              "Content-Type": "application/json"
            },
            name: `gradients`
          },
          {
            url: `https://spreadsheets.google.com/feeds/cells/1WEDq6VHI4JEE7GJtJDhH1ArX2ozXeTzZWJrgCtpcVrM/1/public/full?alt=json`,
            method: `get`,
            headers: {
              "Content-Type": "application/json"
            },
            name: `posts`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-133647344-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'scss', 'html', 'js', 'svg']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
