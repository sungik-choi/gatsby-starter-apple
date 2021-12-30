import { useStaticQuery, graphql } from 'gatsby';
import type { SiteSiteMetadata } from '../graphqlTypes'

interface SiteMetaData { 
  site: {
    siteMetadata: SiteSiteMetadata
  }
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaData>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            utterances {
              repo
            }
            postTitle
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
