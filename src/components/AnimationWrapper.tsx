"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimationWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function AnimationWrapper({
    children,
    className,
    delay = 0,
    direction = "up",
}: AnimationWrapperProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom easing
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
