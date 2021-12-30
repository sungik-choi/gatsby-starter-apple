import React, { useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import LinkList from './linkList';
import ThemeToggleButton from './themeToggleButton/themeToggleButton';
import MenuIcon from './menuIcon';
import Background from 'styles/background';
import {
  listAnimationCSS,
  navBackgroundAnimationCSS,
  curtainAnimationCSS,
} from 'styles/navBarAnimation';
import useSiteMetadata from 'hooks/useSiteMetadata';
import useMenu from 'hooks/useMenu';

const NavBar = ({ title, themeToggler }) => {
  const site = useSiteMetadata();
  const { menuLinks } = site.siteMetadata;
  const { device } = useContext(ThemeContext);
  const navRef = useRef(null);
  const curtainRef = useRef(null);
  const listRef = useRef(null);

  const [toggle, setToggle, onClickHandler] = useMenu({
    navRef,
    curtainRef,
    listRef,
    device,
  });

  return (
    <Nav ref={navRef} aria-label="Global Navigation">
      <NavBackground toggle={toggle} />
      <Content>
        <Title onClick={() => setToggle(false)}>
          <Link to="/">{title}</Link>
        </Title>
        <LinkWrap>
          <Curtain ref={curtainRef} toggle={toggle} />
          <LinkContent>
            <MenuIcon onClickHandler={onClickHandler} toggle={toggle} />
            <LinkUl ref={listRef} toggle={toggle}>
              <LinkList links={menuLinks} setToggle={setToggle} />
              <li>
                <ThemeToggleButton themeToggler={themeToggler} />
              </li>
            </LinkUl>
          </LinkContent>
        </LinkWrap>
      </Content>
    </Nav>
  );
};

const Nav = styled.nav`
  min-width: var(--min-width);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 10;

  a:hover {
    text-decoration: none;
  }
`;

const Content = styled.div`
  box-sizing: content-box;
  position: relative;
  margin: 0 auto;
  max-width: var(--width);
  padding: 0 var(--padding-lg);
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin: 0;
    list-style-type: none;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding: 0 var(--padding-sm);
  }
`;

const Title = styled.h1`
  z-index: 9999;
  padding: 0;
  border: none;
  font-size: var(--text-title);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-text);

  a {
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`;

const LinkUl = styled.ul`
  display: flex;

  a {
    font-weight: var(--font-weight-regular);
  }

  a:hover, a:focus {
    color: var(--color-blue);
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
  }

  li:first-child,
  li:last-child {
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    ${({ toggle }) => listAnimationCSS(toggle)}
    pointer-events: ${({ toggle }) => (toggle ? 'auto' : 'none')};
    flex-direction: column;
    padding: 0 var(--sizing-lg);

    li {
      display: block;
      margin-left: 0;
      font-size: var(--text-md);
      transform: ${({ toggle }) =>
        toggle ? `translateY(var(--sizing-lg))` : `translateY(0)`};
      opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    }

    a {
      display: block;
      height: 100%;
      padding: 0.5rem 0;
      font-weight: var(--font-weight-medium);
    }

    li + li::before {
      content: '';
      display: block;
      position: absolute;
      width: calc(100vw - var(--sizing-lg) * 2);
      height: 1px;
      transform: translateY(-2px);
      background-color: var(--color-divider);
    }
  }
`;

const NavBackground = styled(Background)`
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    &::after {
      ${({ toggle }) => navBackgroundAnimationCSS(toggle)};
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-post-background);
    }
  }
`;

const Curtain = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    ${({ toggle }) => curtainAnimationCSS(toggle)}
    display: block;
    position: fixed;
    top: calc(var(--nav-height) - 1px);
    left: 0;
    width: 100%;
    height: calc(100% - var(--nav-height) + 1px);
    background-color: var(--color-post-background);
  }
`;

const LinkContent = styled.div`
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    z-index: 200;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
  }
`;

export default NavBar;
