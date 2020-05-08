module.exports = {
  siteMetadata: {
    siteTitle: 'DaniJG personal site',
    siteDescription: 'Daniel Jimenez Garcia personal site',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://danijg.github.io/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Daniel Jimenez Garcia', // for example - 'Ivan Ganev'
    authorDescription: 'Welcome! I am a SW developer who loves to code but spends his time at work fixing organizational and people problems. To counterbalance that, I like to write articles published in DotNetCurry and KaizenDorks, tutorials or simply experiment with some code. You can see it all listed here!', // short text about the author
    avatar: '/avatar.jpg',
    avatarAltText: 'Daniel Jimenez Garcia',
    twitterSite: '', // website account on twitter
    twitterCreator: 'https://twitter.com/Dani_djg', // creator account on twitter
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/Dani_djg`,
        altText: 'Twitter profile'
      },
      {
        icon: `github`,
        url: `https://github.com/DaniJG`,
        altText: 'GitHub contributions and projects'
      },
      {
        icon: `stack-overflow`,
        url: `https://stackoverflow.com/users/1836935/daniel-j-g`,
        altText: 'Stack Overflow profile'
      },
      {
        icon: `leanpub`,
        url: `https://www.dotnetcurry.com/author/daniel-jimenez-garcia`,
        altText: 'Articles on DotNetCurry'
      },
      {
        icon: `pied-piper-alt`,
        url: `https://kaizendorks.github.io`,
        altText: 'KaizenDorks contributor'
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/~danijg`,
        altText: 'NPM packages'
      }
    ],
    uiText: {
      // ui text fot translate
      feedShowMoreButton: 'show more',
      feedSearchPlaceholder: 'search',
      cardReadMoreButton: 'read more →',
      allTagsButton: 'all tags'
    },
    feedItems: {
      // global settings for feed items
      limit: 50,
      yearSeparator: false,
      yearSeparatorSkipFirst: true,
      contentTypes: {
        links: {
          beforeTitle: '🔗 '
        }
      }
    },
    feedSearch: {
      symbol: '🔍'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Jimenez Garcia personal site`,
        short_name: `DaniJG site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: 'UA-XXXXXXXXX-X'
    //   }
    // }
  ]
};
