import React, { useContext, useRef } from "react"

import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

import useSiteMetadata from "~/src/hooks/useSiteMetadata"
import type { UseThemeReturnType } from "~/src/hooks/useTheme"
import Background from "~/src/styles/background"
import {
  curtainAnimationCSS,
  listAnimationCSS,
  navBackgroundAnimationCSS,
} from "~/src/styles/navBarAnimation"

import LinkList from "./linkList"
import MenuIcon from "./menuIcon"
import ThemeToggleButton from "./themeToggleButton"
import useMenu from "./useMenu"
import type { UseMenuReturnType } from "./useMenu"

interface NavBarProps {
  title?: string | null
  themeToggler: UseThemeReturnType["themeToggler"]
}

const NavBar: React.FC<NavBarProps> = ({ title, themeToggler }) => {
  const { menuLinks } = useSiteMetadata()
  const { device } = useContext(ThemeContext)
  const navRef = useRef<HTMLElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const { toggle, setToggle, handleClick } = useMenu({
    navRef,
    curtainRef,
    listRef,
    device,
  })

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
            <MenuIcon toggle={toggle} handleClick={handleClick} />
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
  )
}

type Toggleable = Pick<UseMenuReturnType, "toggle">

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
`

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
`

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
`

const LinkUl = styled.ul<Toggleable>`
  display: flex;

  a {
    font-weight: var(--font-weight-regular);
  }

  a:hover,
  a:focus {
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
    pointer-events: ${({ toggle }) => (toggle ? "auto" : "none")};
    flex-direction: column;
    padding: 0 var(--sizing-lg);

    li {
      display: block;
      margin-left: 0;
      font-size: var(--text-md);
      transform: ${({ toggle }) =>
        toggle ? `translateY(var(--sizing-lg))` : `translateY(0)`};
      opacity: ${({ toggle }) => (toggle ? "1" : "0")};
    }

    a {
      display: block;
      height: 100%;
      padding: 0.5rem 0;
      font-weight: var(--font-weight-medium);
    }

    li + li::before {
      content: "";
      display: block;
      position: absolute;
      width: calc(100vw - var(--sizing-lg) * 2);
      height: 1px;
      transform: translateY(-2px);
      background-color: var(--color-divider);
    }
  }
`

const NavBackground = styled(Background)<Toggleable>`
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    &::after {
      ${({ toggle }) => navBackgroundAnimationCSS(toggle)};
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-post-background);
    }
  }
`

const Curtain = styled.div<Toggleable>`
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
`

const LinkContent = styled.div`
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    z-index: 200;
  }
`

const LinkWrap = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
  }
`

export default NavBar
