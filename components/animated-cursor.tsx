"use client"

import { useEffect, useState } from "react"

interface AnimatedCursorProps {
  innerSize?: number
  outerSize?: number
  color?: string
  outerAlpha?: number
  innerScale?: number
  outerScale?: number
  clickables?: string[]
}

export default function AnimatedCursor({
  innerSize = 8,
  outerSize = 35,
  color = "59, 130, 246",
  outerAlpha = 0.3,
  innerScale = 0.7,
  outerScale = 1.2,
  clickables = [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".cursor-pointer",
  ],
}: AnimatedCursorProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isActiveClickable, setIsActiveClickable] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const handleClickableHover = () => setIsActiveClickable(true)
    const handleClickableLeave = () => setIsActiveClickable(false)

    clickables.forEach((selector) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleClickableHover)
        el.addEventListener("mouseleave", handleClickableLeave)
      })
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [clickables])

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      {/* Outer cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          transition: isActiveClickable ? "transform 0.1s ease-out" : "transform 0.15s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full border-2 transition-all duration-150 ease-out"
          style={{
            width: outerSize,
            height: outerSize,
            backgroundColor: `rgba(${color}, ${outerAlpha})`,
            borderColor: `rgb(${color})`,
            transform: `translate(-50%, -50%) scale(${
              isActiveClickable ? outerScale : isActive ? outerScale * 0.8 : 1
            })`,
          }}
        />
      </div>

      {/* Inner cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          transition: "transform 0.1s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full transition-all duration-150 ease-out"
          style={{
            width: innerSize,
            height: innerSize,
            backgroundColor: `rgb(${color})`,
            transform: `translate(-50%, -50%) scale(${
              isActiveClickable ? innerScale : isActive ? innerScale * 1.3 : 1
            })`,
          }}
        />
      </div>
    </>
  )
}
