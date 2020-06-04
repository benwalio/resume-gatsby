module.exports = {
  siteMetadata: {
    title: `Ben Wallace Resume`,
    description: `Resume Page for Ben Wallace of Philadelphia PA. Doing Freelance Web Development and API Integrations.`,
    author: `@benwal_io`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `benwal-resume`
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://benwal.matomo.cloud/',
        siteUrl: 'https://resume.benwal.io'
      }
    },
    `gatsby-plugin-react-helmet`,
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
        name: `ben-wallace-resume`,
        short_name: `resume`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
