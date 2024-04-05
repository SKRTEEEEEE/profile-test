"use client"


import Link from "next/link";
import { MotionTransition } from "./transition-component";
interface SocialNetwork {
    id: number;
    logo: JSX.Element; // Tipo para un elemento JSX
    src: string;
  }
  
  interface Props {
    data: SocialNetwork[];
  }
  
  const Header: React.FC<Props> = ({ data }) => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            SKRTEEEEE
                            <span className="text-secondary">Dev</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {data.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;