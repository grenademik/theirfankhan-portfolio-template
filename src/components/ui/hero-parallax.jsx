"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Skills from "../Skills"

export const HeroParallax = ({ products }) => {
    const firstRow = products.slice(0, 5)
    const secondRow = products.slice(5, 10)
    const thirdRow = products.slice(10, 15)
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    )
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    )
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    )
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    )
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    )
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
        springConfig
    )
    return (
        <div
            ref={ref}
            className="md:h-[80%] lg:h-[80%] pb-10 md:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">

                    {firstRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={`${product.link}-${product.title}-${index}`}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={`${product.link}-${product.title}-${index}`}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={`${product.link}-${product.title}-${index}`}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                Selected builds — <br />live frontend work
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Production Next.js apps, dashboards, and browser tools. Click through for SSR sites, race products, booking flows, and utilities shipped to real users. More on{" "}
                <a href="https://github.com/grenademik" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-red-500">
                    GitHub
                </a>
                .
            </p>
        </div>
    )
}

export const ProductCard = ({ product, translate }) => {
    return (
        <motion.div
            style={{
                x: translate
            }}
            whileHover={{
                y: -20
            }}
            key={product.title}
            className="group/product flex flex-col h-48 w-48 md:h-96 md:w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                target="_blank"
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover rounded-xl object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute font-bold bottom-10 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
            <h2 className="absolute font-thin bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.type}
            </h2>
        </motion.div>
    )
}
