module.exports = {
  siteMetadata: {
    title: `Oh my theme`,
    description: `A simple sandbox website to create/edit themes based on theme-ui and visualize them in a styleguide showing the design system`,
    author: `Pierre Baele`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify",
    // "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oh my Theme - a theme sandbox`,
        short_name: `Oh my Theme`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/oh-my-theme-icon.png`,
        theme_color_in_head: false,
      },
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
  ],
};
