"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  animationData?: any
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  className = "w-32 h-32",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate a simple floating animation since we can't use actual Lottie
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let start = 0

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start

      const y = Math.sin(progress * 0.002) * 10
      container.style.transform = `translateY(${y}px)`

      animationId = requestAnimationFrame(animate)
    }

    if (autoplay) {
      animationId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [autoplay])

  return (
    <div ref={containerRef} className={className}>
      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
    </div>
  )
}
