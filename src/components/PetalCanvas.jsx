import React, { useEffect, useRef } from 'react'

export default function PetalCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Petals array
    const petalCount = 28
    const petals = []

    // Soft rose colors
    const colors = [
      'rgba(235, 175, 185, 0.65)',
      'rgba(244, 205, 212, 0.55)',
      'rgba(212, 139, 150, 0.60)',
      'rgba(255, 225, 230, 0.70)',
      'rgba(212, 175, 55, 0.45)', // subtle golden dust
    ]

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 9 + 6,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: Math.random() * 0.9 + 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAngle: Math.random() * Math.PI * 2,
      })
    }

    const drawPetal = (p) => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.scale(Math.cos(p.swayAngle), 1)

      // Draw graceful petal shape
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size)
      ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0)
      ctx.fillStyle = p.color
      ctx.fill()

      // Delicate center vein
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, p.size * 0.75)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)'
      ctx.lineWidth = 0.5
      ctx.stroke()

      ctx.restore()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      petals.forEach((p) => {
        p.swayAngle += p.swaySpeed
        p.x += p.speedX + Math.sin(p.swayAngle) * 0.8
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        // Wrap around screen
        if (p.y > height + 20) {
          p.y = -20
          p.x = Math.random() * width
        }
        if (p.x > width + 20) p.x = -20
        if (p.x < -20) p.x = width + 20

        drawPetal(p)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.85 }}
    />
  )
}
