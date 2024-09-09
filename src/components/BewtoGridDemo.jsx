
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
        <BentoGrid className="max-w-4xl mx-auto">
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
        description: "Building dynamic, user-friendly web interfaces.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconCode className="h-10 w-10 text-neutral-500" />,
        className: "",
        // animate: true,
    },
    {
        title: "Brand Identity Design",
        description: "Crafting cohesive and impactful brand identities.",
        header: <Skeleton />,
        image: {DesignLogo},
        icon: <IconToolsOff className="h-10 w-10 text-neutral-500" />,
        className: "",
    },
    {
        title: "Social Media Marketing",
        description: "Creating strategies for effective online engagement.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconChartDots className="h-10 w-10 text-neutral-500" />,
        className: "",
    },
    {
        title: "Expertise in Tourism and Trail Running Projects",
        description: "Delivering specialized solutions for tourism and trail running industries.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: <IconTrekking className="h-10 w-10 text-neutral-500" />,
        className: "col-span-2",
    },
    {
        title: "Wanna start a project together?",
        // description: "Creating visually stunning and effective designs.",
        header: <Skeleton />,
        image: "https://plus.unsplash.com/premium_photo-1674539249731-62b047824f06?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "",
        button: "Copy my email"
    }
];
