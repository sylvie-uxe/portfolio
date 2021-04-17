module.exports = {
  siteMetadata: {
    title: "Sylvie Donatien",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      },
    },
    "gatsby-transformer-remark",
  ],
};
