module.exports = {
  siteMetadata: {
    title: 'Pandas Eating Lots'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'public/favicon.ico'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
};
