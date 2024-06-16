'use client'
import styles from '../app/page.module.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../utils/mouseposition';
import irfanDesigner from "@/public/irfandesigner.png";
import irfanDeveloper from "@/public/irfandeveloper.png";
import Image from 'next/image';


export default function MouseHover() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = 300;

    useEffect(() => {
        console.log("Mouse position:", { x, y });
    }, [x, y]);


    return (
        <main className={`${styles.main}`}>
            <motion.div
                className={`${styles.mask} absolute w-full overflow-visible`}
                animate={{
                    WebkitMaskPosition: `${x-1000}px ${y-100}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}

            >
                <Image
                    src={irfanDeveloper}
                    alt="Irfan"
                    height={500}
                    width={500}
                    className=""
                />
            </motion.div>

            <div className={`${styles.body} `}>
                <Image
                    src={irfanDesigner}
                    height={500}
                    width={500}
                    alt="Irfan"
                    className=""
                />
            </div>

        </main>
    )
}