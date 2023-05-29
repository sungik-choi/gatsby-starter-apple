import React from "react"

import styled from "styled-components"

import type { UseMenuReturnType } from "./useMenu"

const MenuIcon: React.FC<Omit<UseMenuReturnType, "setToggle">> = ({
  toggle,
  handleClick,
}) => {
  return (
    <MenuIconButton onClick={handleClick} toggle={toggle} aria-label="Menu">
      <MenuIconBreadTop>
        <div />
      </MenuIconBreadTop>
      <MenuIconBreadBottom>
        <div />
      </MenuIconBreadBottom>
    </MenuIconButton>
  )
}

const MenuIconBreadTop = styled.div`
  top: 22px;
`

const MenuIconBreadBottom = styled.div`
  bottom: 22px;
`

const MenuIconButton = styled.button<Pick<UseMenuReturnType, "toggle">>`
  z-index: 9999;
  display: none;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    position: relative;
    margin-left: auto;
    display: block;
    cursor: pointer;
    width: var(--nav-height);
    height: var(--nav-height);
    border: none;
    background-color: transparent;

    & > div {
      position: absolute;
      width: 18px;
      height: 1px;
      right: var(--padding-sm);
      opacity: 0.8;
      transition: opacity 0.3s ease,
        transform
          ${({ toggle }) => (toggle === true ? "0.1s ease" : "0.2s ease 0.1s")};
    }

    & > div > div {
      width: 100%;
      height: 100%;
      background-color: var(--color-text);
      transition: transform
        ${({ toggle }) => (toggle === true ? "0.2s ease 0.1s" : "0.1s ease")};
    }

    ${MenuIconBreadTop} {
      transform: ${({ toggle }) =>
        toggle === false ? "none" : "translateY(4.5px)"};
      div {
        transform: ${({ toggle }) =>
          toggle === false ? "none" : "rotate(45deg)"};
      }
    }

    ${MenuIconBreadBottom} {
      transform: ${({ toggle }) =>
        toggle === false ? "none" : "translateY(-4.5px)"};
      div {
        transform: ${({ toggle }) =>
          toggle === false ? "none" : "rotate(-45deg)"};
      }
    }

    &:hover > div {
      opacity: 1;
    }
  }
`

export default MenuIcon
