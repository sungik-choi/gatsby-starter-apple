const PI2 = Math.PI * 2

export type RGB = { r: number; g: number; b: number }

interface GlowParticleProps {
  x: number
  y: number
  radius: number
  rgb: RGB
}

class GlowParticle {
  x: number
  vx: number
  y: number
  vy: number
  radius: number
  rgb: RGB
  sinValue: number

  constructor({ x, y, radius, rgb }: GlowParticleProps) {
    this.x = x
    this.y = y
    this.radius = radius
    this.rgb = rgb

    this.vx = Math.random() * 4
    this.vy = Math.random() * 4

    this.sinValue = Math.random()
  }

  animate(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number
  ) {
    this.sinValue += 0.01
    this.radius += Math.sin(this.sinValue)
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) {
      this.vx *= -1
      this.x += 10
    } else if (this.x > stageWidth) {
      this.vx *= -1
      this.x -= 10
    }

    if (this.y < 0) {
      this.vy *= -1
      this.y += 10
    } else if (this.y > stageHeight) {
      this.vy *= -1
      this.y -= 10
    }

    ctx.beginPath()

    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    )

    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`)
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`)

    ctx.fillStyle = g
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false)
    ctx.fill()
  }
}

export default GlowParticle
