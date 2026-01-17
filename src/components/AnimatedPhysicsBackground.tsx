'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedPhysicsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Store canvas reference for use in classes (TypeScript null check already done above)
    const canvasWidth = () => canvas.width
    const canvasHeight = () => canvas.height

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Physics phenomena classes
    class Photon {
      x: number
      y: number
      vx: number
      vy: number
      speed: number
      trail: { x: number; y: number }[] = []
      color: string

      constructor() {
        this.x = Math.random() * canvasWidth()
        this.y = Math.random() * canvasHeight()
        const angle = Math.random() * Math.PI * 2
        this.speed = 0.8 + Math.random() * 1.2  // Reduced speed
        this.vx = Math.cos(angle) * this.speed
        this.vy = Math.sin(angle) * this.speed
        this.color = `hsl(${180 + Math.random() * 60}, 100%, ${70 + Math.random() * 30}%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvasWidth()
        if (this.x > canvasWidth()) this.x = 0
        if (this.y < 0) this.y = canvasHeight()
        if (this.y > canvasHeight()) this.y = 0

        this.trail.push({ x: this.x, y: this.y })
        if (this.trail.length > 10) this.trail.shift()
      }

      draw() {
        if (!ctx) return
        // Draw trail
        for (let i = 0; i < this.trail.length - 1; i++) {
          const alpha = i / this.trail.length
          ctx.strokeStyle = this.color.replace(')', `, ${alpha * 0.3})`)
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(this.trail[i].x, this.trail[i].y)
          ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y)
          ctx.stroke()
        }
        // Draw photon
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string

      constructor(x?: number, y?: number) {
        this.x = x ?? Math.random() * canvasWidth()
        this.y = y ?? Math.random() * canvasHeight()
        const angle = Math.random() * Math.PI * 2
        const speed = 0.5 + Math.random() * 1
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.radius = 2 + Math.random() * 3
        this.color = `hsl(${200 + Math.random() * 60}, 100%, ${60 + Math.random() * 40}%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvasWidth()) this.vx *= -1
        if (this.y < 0 || this.y > canvasHeight()) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      collide(other: Particle) {
        const dx = other.x - this.x
        const dy = other.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance < this.radius + other.radius
      }
    }

    class Rocket {
      x: number
      y: number
      vy: number
      trail: { x: number; y: number; size: number }[] = []

      constructor() {
        this.x = Math.random() * canvasWidth()
        this.y = canvasHeight() + 50
        this.vy = -0.5 - Math.random() * 0.5  // Much slower rockets
      }

      update() {
        this.y += this.vy
        this.trail.push({ x: this.x, y: this.y, size: 5 })
        if (this.trail.length > 20) this.trail.shift()
      }

      draw() {
        if (!ctx) return
        // Draw trail
        for (let i = 0; i < this.trail.length - 1; i++) {
          const alpha = i / this.trail.length
          ctx.fillStyle = `rgba(255, 100, 0, ${alpha * 0.5})`
          ctx.beginPath()
          ctx.arc(this.trail[i].x, this.trail[i].y, this.trail[i].size * alpha, 0, Math.PI * 2)
          ctx.fill()
        }
        // Draw rocket
        ctx.fillStyle = '#FF6B35'
        ctx.beginPath()
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      isOffScreen() {
        return this.y < -50
      }
    }

    class Galaxy {
      x: number
      y: number
      angle: number
      radius: number
      stars: { angle: number; distance: number }[] = []

      constructor() {
        this.x = Math.random() * canvasWidth()
        this.y = Math.random() * canvasHeight()
        this.angle = Math.random() * Math.PI * 2
        this.radius = 50 + Math.random() * 100
        const starCount = 30 + Math.floor(Math.random() * 20)
        for (let i = 0; i < starCount; i++) {
          this.stars.push({
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * this.radius,
          })
        }
      }

      update() {
        this.angle += 0.002
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        this.stars.forEach((star) => {
          const x = Math.cos(star.angle) * star.distance
          const y = Math.sin(star.angle) * star.distance * 0.3
          const brightness = 0.3 + (star.distance / this.radius) * 0.7
          ctx.fillStyle = `rgba(150, 200, 255, ${brightness * 0.3})`
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fill()
        })

        ctx.restore()
      }
    }

    class Electron {
      x: number
      y: number
      centerX: number
      centerY: number
      angle: number
      radius: number
      speed: number

      constructor(centerX: number, centerY: number) {
        this.centerX = centerX
        this.centerY = centerY
        this.radius = 30 + Math.random() * 50
        this.angle = Math.random() * Math.PI * 2
        this.speed = 0.02 + Math.random() * 0.03
        this.x = this.centerX + Math.cos(this.angle) * this.radius
        this.y = this.centerY + Math.sin(this.angle) * this.radius
      }

      update() {
        this.angle += this.speed
        this.x = this.centerX + Math.cos(this.angle) * this.radius
        this.y = this.centerY + Math.sin(this.angle) * this.radius
      }

      draw() {
        if (!ctx) return
        // Draw orbit path
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Draw electron
        ctx.fillStyle = '#60A5FA'
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw nucleus
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(this.centerX, this.centerY, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize physics phenomena
    const photons: Photon[] = []
    const particles: Particle[] = []
    const rockets: Rocket[] = []
    const galaxies: Galaxy[] = []
    const electrons: Electron[] = []
    const atoms: { x: number; y: number; electrons: Electron[] }[] = []

    // Create particles (reduced by 90% - keep only 1)
    for (let i = 0; i < 1; i++) {
      particles.push(new Particle())
    }

    // Create atoms with orbiting electrons (reduced by 90% - keep only 1)
    for (let i = 0; i < 1; i++) {
      const atomX = Math.random() * canvasWidth()
      const atomY = Math.random() * canvasHeight()
      const electronCount = 2
      const atomElectrons: Electron[] = []
      for (let j = 0; j < electronCount; j++) {
        atomElectrons.push(new Electron(atomX, atomY))
      }
      atoms.push({ x: atomX, y: atomY, electrons: atomElectrons })
    }

    // Create 1 initial rocket (reduced by 90% - keep only 1)
    for (let i = 0; i < 1; i++) {
      rockets.push(new Rocket())
    }

    let lastRocketTime = Date.now()
    const rocketInterval = 30000 + Math.random() * 20000  // Rockets appear very rarely (reduced by 75%)

    function animate() {
      if (!ctx) return
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvasWidth(), canvasHeight())

      // Galaxies and photons removed - only showing atoms, particles, and rockets

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Check for particle collisions
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[i].collide(particles[j])) {
            // Create collision effect
            ctx.fillStyle = 'rgba(255, 255, 0, 0.5)'
            ctx.beginPath()
            ctx.arc(particles[i].x, particles[i].y, 10, 0, Math.PI * 2)
            ctx.fill()

            // Bounce particles
            const dx = particles[j].x - particles[i].x
            const dy = particles[j].y - particles[i].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const angle = Math.atan2(dy, dx)

            const tempVx = particles[i].vx
            const tempVy = particles[i].vy
            particles[i].vx = particles[j].vx
            particles[i].vy = particles[j].vy
            particles[j].vx = tempVx
            particles[j].vy = tempVy
          }
        }
      }

      // Update and draw atoms with electrons
      atoms.forEach((atom) => {
        atom.electrons.forEach((electron) => {
          electron.update()
          electron.draw()
        })
      })

      // Maintain exactly 1 rocket - replace when it goes off screen (90% reduction)
      if (rockets.length < 1) {
        rockets.push(new Rocket())
        lastRocketTime = Date.now()
      }

      rockets.forEach((rocket) => {
        rocket.update()
        rocket.draw()
      })

      // Remove off-screen rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        if (rockets[i].isOffScreen()) {
          rockets.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

