const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Hindås TK`,
    description: `Hindås TK hittar ni uppe i det nybyggda området. Boka bana och spela tennis hos oss!`,
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
         link:'/tennis-school'
      },
        {
         name:'Nyheter',
         link:'/blog-page'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
       
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,        
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/home/`,
      },  
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#a70d18`,
        theme_color: `#a70d18`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
