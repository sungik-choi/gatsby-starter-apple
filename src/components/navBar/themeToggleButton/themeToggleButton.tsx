import React, { useContext } from "react"
import styled from "styled-components"

import type { UseThemeReturnType } from "Hooks/useTheme"
import ThemeContext from "Stores/themeContext"
import Background from "Styles/background"
import { DARK } from "Constants/theme"
import ThemeIcon from "./themeIcon"

interface ThemeToggleButtonProps {
  themeToggler: UseThemeReturnType["themeToggler"]
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  themeToggler,
}) => {
  const theme = useContext(ThemeContext)
  const LABEL_TEXT = theme === DARK ? "Light theme" : "Dark theme"

  return (
    <Button onClick={themeToggler}>
      <ButtonBackground />
      <Content>
        <Icon version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
          <ThemeIcon theme={theme} />
        </Icon>
        <Text>{LABEL_TEXT}</Text>
      </Content>
    </Button>
  )
}

const Icon = styled.svg`
  width: 1.125rem;
  height: 1.125rem;
  fill: var(--color-icon);
  transform: translateY(-1px);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 0;
    height: 1rem;
    transition: width 0.3s ease;
  }
`

const ButtonBackground = styled(Background)`
  border: none;
  background-color: var(--color-floating-button);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 3px 15px var(--color-floating-button-shadow);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    visibility: hidden;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
`

const Content = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

const Text = styled.span`
  color: var(--color-floating-button-text);
  margin-left: 6px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    color: var(--color-text);
    margin-left: 0;
    font-weight: var(--font-weight-medium);
    border-radius: 50%;
  }
`

const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 100;
  right: var(--sizing-md);
  bottom: var(--sizing-md);
  padding: var(--sizing-base);
  padding-right: 20px;
  border: 1px solid var(--color-floating-button-border);
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-medium);

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    &:hover {
      outline: none;
      border: 1px solid var(--color-floating-button-border-hover);

      ${Icon},
      ${Text} {
        color: var(--color-floating-button-text-hover);
        fill: var(--color-floating-button-text-hover);
      }

      ${ButtonBackground} {
        background-color: var(--color-floating-button-hover);
        box-shadow: 0 3px 15px var(--color-floating-button-shadow-hover);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    justify-content: start;
    position: static;
    border-radius: 0;
    border: none;
    width: 100%;
    padding: 0.5rem 0;

    &:hover {
      ${Icon}, ${Text} {
        fill: var(--color-blue);
        color: var(--color-blue);
      }
      ${Icon} {
        width: 1rem;
        margin-right: 4px;
      }
    }

    &:focus-visible {
      ${Icon}, ${Text} {
        fill: var(--color-blue);
        color: var(--color-blue);
      }
      ${Icon} {
        width: 1rem;
        margin-right: 4px;
      }
    }
  }
`

export default ThemeToggleButton
