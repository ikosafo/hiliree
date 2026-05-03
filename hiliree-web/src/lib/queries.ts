export const GET_SITE_SETTINGS = `
  query SiteSettings {
    generalSettings {
      title
      description
      url
    }
    siteSettings {
      nodes {
        siteSettingsFields {
          logo {
            node {
              sourceUrl
            }
          }
          footerText
          facebookUrl
          instagramUrl
          twitterUrl
        }
      }
    }
  }
`;



// Add to your existing queries
export const GET_MAIN_MENU = `
  query MainMenu {
    menuItems(where: {location: PRIMARY}) {
      nodes {
        id
        label
        url
        path
        parentId
        childItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  }
`;


export const GET_HOMEPAGE_DATA = `
  query HomepageData {
    page(id: "home", idType: URI) {
      title
      homepageSections {
        homepageSections {
          title
          subtitle
          ctaText
          ctaUrl
          backgroundImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_FOOTER_MENU = `
  query FooterMenu {
    menuItems(where: {location: FOOTER}) {
      nodes {
        id
        label
        url
        path
      }
    }
  }
`;