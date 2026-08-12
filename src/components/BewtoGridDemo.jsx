
import React from "react";
import {
    IconCode,
    IconToolsOff,
    IconChartDots,
    IconTrekking,
    IconCircleCheckFilled,
} from "@tabler/icons-react";
import { cn } from "../utils/cn";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import DesignLogo from "../images/design-svgrepo-com.svg"

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-5xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                    image={item.image}
                    animate={item.animate}
                    button={item.button}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
);


const items = [
    {
        title: "Web Development",
        description: "React / Next.js apps, dashboards, and performance-focused UI.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconCode className="h-10 w-10 text-neutral-500" />,
        className: "col-span-2 md:col-span-1",
    },
    {
        title: "Brand Identity Design",
        description: "Design systems and visual craft that sharpen product UI.",
        header: <Skeleton />,
        image: {DesignLogo},
        icon: <IconToolsOff className="h-10 w-10 text-neutral-500" />,
        className: "col-span-2 md:col-span-1",
    },
    {
        title: "Product tools",
        description: "Browser utilities like ElevProf and race bib generators.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconChartDots className="h-10 w-10 text-neutral-500" />,
        className: "col-span-2 md:col-span-1",
    },
    {
        title: "Tourism & trail running products",
        description: "Booking, registration, payments, and event ops for outdoor brands.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconTrekking className="h-10 w-10 text-neutral-500" />,
        className: "col-span-2",
    },
    {
        title: "Based in Japan — open to frontend roles",
        // description: "Creating visually stunning and effective designs.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "col-span-2 md:col-span-1",
        button: "Copy my email"
        
    }
];
