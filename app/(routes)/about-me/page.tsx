import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import Link from "next/link";
// import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            
            <CircleImage />
            <AvatarServices />
            <div className="md:grid flex flex-col items-center justify-center h-screen max-w-5xl md:gap-6 gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-xl leading-tight text-center sm:text-left xl:text-4xl xl:mb-5">Mis <span className="font-bold text-secondary"> skills.</span></h1>
                    
                        <ul className="md:mb-3 xl:text-xl 
                    text-gray-300">
                            <li className="mb-2 border-secondary/10 border-4 rounded-md">
                            Fullstack web JS<br/>React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose.js, TailwindCss, etc...
                            </li>
                            <li className="mb-2 border-secondary/10 border-4 rounded-md">Fullstack dApp <i>EVM</i><br />Solidity, Ether.js, Thirdweb, Hardhat, Forge, Chainlink, etc... </li>
                        </ul>
                        
                    <Link href={"mailto:adanreh.m@gmail.com"} className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</Link>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default AboutMePage;