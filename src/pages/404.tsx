import React, { useLayoutEffect, useRef, useState } from "react"

import styled from "styled-components"

import SEO from "~/src/components/seo"
import Layout from "~/src/layouts/layout"
import GlowParticle, { type RGB } from "~/src/utils/glowParticle"

const COLORS: RGB[] = [
  { r: 255, g: 149, b: 0 }, // orange
  { r: 255, g: 45, b: 85 }, // pink
  { r: 175, g: 82, b: 222 }, // purple
  { r: 255, g: 59, b: 48 }, // red
  { r: 255, g: 204, b: 0 }, //yellow
]

const NotFound = () => {
  const canvasReference = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<GlowParticle[]>([])
  const isCreated = useRef(false)
  const requestReference = useRef<number>()

  useLayoutEffect(() => {
    const canvasObject = canvasReference.current
    const context = canvasObject?.getContext("2d")
    let stageWidth = document.body.clientWidth
    let stageHeight = document.body.clientHeight
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

    const totalParticles = 5
    const maxRadius = Math.max(Math.floor(stageWidth / 3), 600)
    const minRadius = Math.max(Math.floor(stageWidth / 5), 300)

    const createParticles = () => {
      let colorIndex = 0
      setParticles([])

      for (let index = 0; index < totalParticles; index++) {
        const newParticle = new GlowParticle({
          x: Math.random() * stageWidth,
          y: Math.random() * stageHeight,
          radius: Math.random() * (maxRadius - minRadius) + minRadius,
          rgb: COLORS[colorIndex],
        })

        if (++colorIndex >= COLORS.length) colorIndex = 0

        setParticles(previousParticles => [...previousParticles, newParticle])
      }
    }

    const render = () => {
      context?.clearRect(0, 0, stageWidth, stageHeight)
      for (let index = 0; index < totalParticles; index++) {
        const item = particles[index]
        if (!item || !context) return
        item.animate(context, stageWidth, stageHeight)
      }
      requestReference.current = requestAnimationFrame(render)
    }

    const resize = () => {
      stageWidth = document.body.clientWidth
      stageHeight = document.body.clientHeight
      if (!canvasObject) return
      canvasObject.width = stageWidth * pixelRatio
      canvasObject.height = stageHeight * pixelRatio
      if (!context) return
      context.scale(pixelRatio, pixelRatio)
      context.globalCompositeOperation = "saturation"
      context.clearRect(0, 0, stageWidth, stageHeight)

      isCreated.current = true
      createParticles()
    }

    const init = () => {
      if (isCreated.current) {
        render()
      } else {
        resize()
      }
    }

    init()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      if (!requestReference.current) return
      window.cancelAnimationFrame(requestReference.current)
    }
  })

  return (
    <Layout>
      <SEO title="Not found" />
      <Container>
        <TitleWrap>
          <Title>404</Title>
          <Divider />
          <Desc>Page not found</Desc>
        </TitleWrap>
        <Canvas ref={canvasReference} />
      </Container>
    </Layout>
  )
}

const Container = styled.main`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 45, 85);
`

const Divider = styled.div`
  width: 100%;
  height: 4px;
  margin: 1rem 0 1.5rem 0;
  background-color: rgba(255, 255, 255, 0.5);
`

const TitleWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`

const Title = styled.h1`
  color: white;
  font-size: 8rem;
`

const Desc = styled.h2`
  color: white;
  font-size: 2.5rem;
`

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default NotFound
