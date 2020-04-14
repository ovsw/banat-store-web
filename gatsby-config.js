/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require('path')
const clientConfig = require('./client-config')

module.exports = {
  /* Your site config here */

  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: config.siteTitle,
    //     short_name: config.siteTitleShort,
    //     description: config.siteDescription,
    //     start_url: config.pathPrefix,
    //     background_color: config.backgroundColor,
    //     theme_color: config.themeColor,
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: '/favicons/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/favicons/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   }
    // },
    // 'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true
    //     // sampleRate: 5,
    //     // siteSpeedSampleRate: 10
    //   }
    // },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Merriweather:400,700',
          'Open Sans:400,400i,700'
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-theme-ui'
  ]

}
