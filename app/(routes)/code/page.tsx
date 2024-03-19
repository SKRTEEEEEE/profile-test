"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { web3page } from '@/data';
import CircleImage from '@/components/circle-image';
// import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';
import Link from 'next/link';
import AvatarCode from '@/components/avatar-code';

const Web3Page = () => {
    return (
        <>
            <TransitionPage />
            <AvatarCode/>
            <div className='flex flex-col justify-center h-lvh'>
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Ejemplos de proyectos
                    <span className="block font-bold text-secondary"> de desarrollo web3
                    </span>
                </h1>
                <div className="flex items-center justify-center">
                    <p className='p-4 px-8 text-white hover:text-white hover:border-secondary/60 border-secondary/10 rounded-md border-4'>Disponible <span className='text-red-600/10 hover:text-white'>en Mayo <i>04/2024</i></span> </p>
                    {/* <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] xl:w-[750px] lg:w-[650px] sm:w-[550px] "
                        >
                            {web3page.map(({ id, name, description, imageUrl, urlDemo, urlGithubWeb, urlGithubBlock }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                    
                                        <div className="flex justify-between gap-5 mt-5">
                                            <Link
                                                href={urlGithubWeb}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                                            >
                                                <span className='hidden lg:inline'>Github </span>Website Code
                                            </Link>

                                            <Link
                                                href={urlDemo}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                                            >
                                                Live demo
                                            </Link>
                                            <Link
                                                href={urlGithubBlock}
                                                target="_blank"
                                                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                                            >
                                                <span className='hidden lg:inline'>Github </span>Blockchain Code
                                            </Link>
                                        </div>
                                    
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Web3Page;