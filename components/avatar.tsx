
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="top-10 right-0 hidden md:inline-block md:absolute ">
            <Image src="/avatar1.svg" width="600" height="600" className="" alt="Particles " />
        </MotionTransition>
    )
}
