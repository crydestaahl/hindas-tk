module.exports = {
  siteMetadata: {
    title: `Hindås TK`,
    description: `Hindås TK's hemsida. Boka bana och spela tennis hos oss!`,
    author: `Christoffer Rydeståhl`,
    menuLinks:[
      {
         name:'Hindås TK',
         link:'/'
      },
      {
         name:'Boka bana',
         link:'https://www.matchi.se/facilities/hindastk?date=2021-04-13&sport='
      },
      {
         name:'Medlemsskap',
         link:'/medlemsskap'
      },
      {
         name:'Tennisskola',
         link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
