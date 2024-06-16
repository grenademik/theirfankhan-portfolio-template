"use client"

import { cn } from "@/src/utils/cn"
import Image from "next/image"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCardsPortfolio = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null)
  const scrollerRef = React.useRef(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className=" mx-4"
            key={item.name}
          >
            <div className="relative z-20 hover:scale-110 cursor-pointer duration-300 ease-in flex flex-row items-center px-10">
              <div className="h-96 z-0">
                <Image src={item.image} fill="false" className="rounded-lg"/>
              </div>
              <span className="uppercase hover:text-red-400 z-10 bottom-0 tracking-widest font-bold text-lg leading-[1.6]  text-white ">
                {item.title}
              </span>
    
              <span className="text-red-600 text-xl z-10">✷</span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}
