import { css } from "styled-components"

export const listAnimationCSS = (toggle: boolean) => {
  let styles = ""
  const MAX_NUM = 10
  const OPEN_BASE = 0.1
  const CLOSE_BASE = 0.25
  const OFFSET = 0.06

  const TRANSFORM_DURING = 0.5
  const OPACITY_DURING = 0.3

  const TRANSFORM_TIMING_FUNC = toggle
    ? "cubic-bezier(.19,.2,0,.99)"
    : "ease-in"
  const OPACITY_TIMING_FUNC = "ease-out"

  const calcDelaySec = (i: number) =>
    toggle ? OPEN_BASE + i * OFFSET : CLOSE_BASE - i * OFFSET

  for (let i = 0; i < MAX_NUM; i += 1) {
    styles += `
    li:nth-child(${i}) {
        transition-property: transform, opacity;
        transition-duration: ${TRANSFORM_DURING}s, ${OPACITY_DURING}s;
        transition-delay: ${calcDelaySec(i)}s;
        transition-timing-function: ${TRANSFORM_TIMING_FUNC}, ${OPACITY_TIMING_FUNC};
    }
    `
  }

  return css`
    ${styles}
  `
}

export const navBackgroundAnimationCSS = (toggle: boolean) => {
  const TRANSITION = toggle ? "0.3s ease" : "0.4s ease-in-out 0.48s"
  const OPACITY = toggle ? 1 : 0
  return css`
    transition: opacity ${TRANSITION};
    opacity: ${OPACITY};
  `
}

export const curtainAnimationCSS = (toggle: boolean) => {
  const SCALE = toggle ? "scaleY(1)" : "scaleY(0)"
  return css`
    transition: transform 0.6s cubic-bezier(0.41, 0.06, 0.05, 1) 0.1s;
    transform: ${SCALE};
    transform-origin: top;
  `
}
