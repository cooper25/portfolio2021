module.exports = {
  siteMetadata: {
    title: "portfolio2021",
  },
  plugins: ["gatsby-plugin-react-helmet"
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `tsor.is:8000`,
      },
    },
  ],
};
