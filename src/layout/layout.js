import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from 'components/navBar/navBar';
import ThemeContext from 'store/themeContext';
import useTheme from 'hooks/useTheme';
import useSiteMetadata from 'hooks/useSiteMetadata';
import styledTheme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

const Layout = ({ children }) => {
  const [theme, themeToggler] = useTheme();
  const site = useSiteMetadata();
  const { title, author } = site.siteMetadata;
  const copyrightStr = `Copyright © ${author}. Built with `;
  const repoName = 'gatsby-starter-apple';
  const repoSrc = 'https://github.com/sungik-choi/gatsby-starter-apple';

  return (
    <ThemeProvider theme={styledTheme}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyle />
        <Container>
          <NavBar title={title} themeToggler={themeToggler} />
          {children}
        </Container>
        <Footer role="contentinfo">
          <Copyright aria-label="Copyright">
            {copyrightStr}
            <RepoLink href={repoSrc} target="__blank">
              {repoName}
            </RepoLink>
          </Copyright>
        </Footer>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--color-post-background);
`;

const Footer = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--color-gray-1);
`;

const Copyright = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-6);
`;

const RepoLink = styled.a`
  color: var(--color-blue);
  &:hover {
    text-decoration: underline;
  }
`;

export default Layout;
