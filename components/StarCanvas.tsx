'use client'
import { useEffect, useRef } from 'react'

export function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configuration
    const config = {
      numLines: 8,
      lineLength: 100,
      starColor: "#0000FF", // Changed back to blue
      pointSize: 3,
      gridSize: 5,
      lineWidth: 3,
      initialRotation: Math.PI / 4,
      lineThickness: 5,
      attractionDistance: 50,
      returnForceMax: 0.1,
      dampening: 0.9, // Added dampening factor
    }

    // State
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    const lines: Array<Array<Point>> = []

    // Types
    type Point = {
      x: number
      y: number
      vx: number
      vy: number
      originalX: number
      originalY: number
    }

    // Canvas sizing
    function resizeCanvas() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    // Create star points
    function createLines() {
      lines.length = 0
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const angleStep = (Math.PI * 2) / config.numLines

      for (let i = 0; i < config.numLines; i++) {
        const angle = i * angleStep + config.initialRotation
        createLineSet(angle, centerX, centerY)
      }
    }

    // Helper to create a set of lines for each angle
    function createLineSet(angle: number, centerX: number, centerY: number) {
      for (let offset = -config.lineWidth / 2; offset <= config.lineWidth / 2; offset++) {
        const line: Point[] = []
        for (let j = 0; j < config.lineLength; j += config.lineThickness) {
          line.push(createPoint(angle, j, offset, centerX, centerY))
        }
        lines.push(line)
      }
    }

    // Create a single point
    function createPoint(angle: number, distance: number, offset: number, centerX: number, centerY: number): Point {
      const x = centerX + Math.cos(angle) * distance - Math.sin(angle) * offset * config.gridSize
      const y = centerY + Math.sin(angle) * distance + Math.cos(angle) * offset * config.gridSize
      return { x, y, vx: 0, vy: 0, originalX: x, originalY: y }
    }

    // Update point positions based on mouse position
    function updatePoints() {
      lines.forEach(line => {
        line.forEach(point => {
          updatePointPosition(point)
        })
      })
    }

    // Update a single point's position
    function updatePointPosition(point: Point) {
      // Mouse repulsion
      const dx = point.x - mouseX
      const dy = point.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < config.attractionDistance) {
        const force = (config.attractionDistance - distance) / config.attractionDistance
        const angle = Math.atan2(dy, dx)
        point.vx = (point.vx + Math.cos(angle) * force * 2) * config.dampening
        point.vy = (point.vy + Math.sin(angle) * force * 2) * config.dampening
      }

      // Return force
      const returnDx = point.originalX - point.x
      const returnDy = point.originalY - point.y
      const returnDistance = Math.sqrt(returnDx * returnDx + returnDy * returnDy)
      const returnForce = Math.min(config.returnForceMax, returnDistance / 100)

      // Apply forces
      point.vx += returnDx * returnForce
      point.vy += returnDy * returnForce

      // Apply velocity
      point.x += point.vx
      point.y += point.vy

      // Dampen velocity
      point.vx *= config.dampening
      point.vy *= config.dampening
    }

    // Draw the star
    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = config.starColor

      lines.forEach(line => {
        line.forEach(point => {
          const snappedX = Math.round(point.x / config.gridSize) * config.gridSize
          const snappedY = Math.round(point.y / config.gridSize) * config.gridSize
          ctx.fillRect(
            snappedX - config.pointSize / 2,
            snappedY - config.pointSize / 2,
            config.pointSize,
            config.pointSize
          )
        })
      })
    }

    // Animation loop
    function animate() {
      updatePoints()
      drawLines()
      requestAnimationFrame(animate)
    }

    // Event listeners
    function handleMouseMove(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Initialize
    resizeCanvas()
    createLines()
    animate()

    // Handle window resize
    window.addEventListener("resize", () => {
      resizeCanvas()
      createLines()
    })

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-64"
      style={{ background: 'transparent' }}
    />
  )
}