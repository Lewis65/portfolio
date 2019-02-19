const secrets = require('./secrets.json')

module.exports = {
  siteMetadata: {
    title: 'Lewis Horwood',
    description: 'I am a Javascript developer focused on making cool and useful things that make life better. The MERN stack (Mongo, Express, React, Node) is my weapon of choice.',
    author: 'Lewis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: secrets.contentfulSpaceId,
        accessToken: secrets.contentfulAccessToken
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
