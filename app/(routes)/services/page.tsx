

"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

<TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="font-bold text-secondary">
                Estudios certificados
                    </span>
                    {' '}destacados
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
            <TransitionPage />
        </>
    );
}

export default ServicesPage;