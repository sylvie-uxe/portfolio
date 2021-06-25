require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Sylvie Donatien`,
    description: `Sylvie Donatien is a UX Designer and Front-End Developer who designs valuable and enjoyable digital experiences for all and codes in JavaScript, TypeScript, Angular and React to make those experiences come true.`,
    author: `Sylvie Donatien`,
    menuLinks: [
      {
        name: `About`,
        link: `#about`
      },
      {
        name: `Work`,
        link: `#work`
      },
      {
        name: `Resume`,
        link: `#resume`
      },
      {
        name: `Contact`,
        link: `#contact`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 1080,
        quality: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables `Add to Homescreen` prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
