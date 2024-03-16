import { BookText, CodeSquare,  HomeIcon, UserRound, Linkedin, Github, Mail, Link } from "lucide-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiSolidity, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github  size={30} strokeWidth={1} />,
        src: "https://github.com/SKRTEEEEEE",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://github.com/SKRTEEEEEE",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:adanreh.m@gmail.com",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
        
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText  size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 5,
        title: "Code",
        icon: <Link  size={25} color="#fff" strokeWidth={1} />,
        link: "/code",
    },
];

export const dataStudiesPage = [
    {
        id: 1,
        title: "Curso Fullstack Javascript",
        institution: "CIEF",
        date: "Actualidad",
        description: 
            "Curso centrado en aprender a crear sitios web interactivos usando HTML, CSS y JavaScript en el lado del cliente, y Node.js en el servidor con MySQL para almacenar datos.",
        badges: [
            "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MySQL", "BDD", "OOP", "DOM"
        ],
        link: "https://www.grupcief.com/"
    },
    {
        id: 2,
        title: "Chainlink bootcamp 2024",
        institution: "Chainlink",
        date: "20/01/24",
        description: "Entrenamiento oficial para dominar el uso de la tecnología de Oracle Chainlink, abarcando conceptos de blockchain, Solidity, tokens ERC20, NFTs y automatización de Chainlink.",
        badges: [
            "Chainlink", "Blockchain", "Solidity", "ERC721", "ERC20", "Blockchain Oracles", "CCIP", "Chainlink Functions"
        ],
        link: "https://coinmarketcap.com/currencies/chainlink/"
    },
    {
        id: 3,
        title: "Big Data I",
        institution: "Coliseum",
        date: "19/12/23",
        description: "Curso introductorio sobre el uso de Python para manipular grandes conjuntos de datos, incluyendo estadísticas, procesamiento y visualización de datos.",
        badges: [
            "Python"
        ],
        link: "https://www.centrocoliseum.com/"
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Año de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Funcionalidades desarolladas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos en github",
        lineRight: true,
        lineRightMobile: true,
    },
    // {
    //     id: 3,
    //     endCounter: 30,
    //     text: "Premios ganadores",
    //     lineRight: false,
    //     lineRightMobile: false,
    // },
];

export const serviceData = [
    {
        icon: <FaReact />,
        title: "ReactJS",
        description: "React-DOM, JWT, Hooks, APIs, Protected Routes, JSX, Router, Redux, etc...",
    },
    {
        icon: <SiTailwindcss />,
        title: "TailwindCSS",
        description: "Mobile-first, resposive, utility-first, classes y variables, plugins, etc...",
    },
    {
        icon: <TbBrandNextjs />,
        title: "NextJS",
        description: "SSR, CSR, APIs, Pre-rendering, SEO Friendly, Next.js14 Compability, etc...",
    },
    {
        icon: <FaNodeJs />,
        title: "Node.js",
        description: "Async/Await, Nodemon.js, Express.js, NPM (Node Package Manager), JSON, etc...",
    },
    {
        icon: <SiSolidity />,
        title: "Solidity",
        description: "Smart Contracts, Hardhat, Ethet.js, Thirdweb, Estandares ERC, Chainlink, etc... ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Working Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#https://github.com/SKRTEEEEEE/frontpruebas",
        urlDemo: "#",
        operative: false,
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    },
    {
        id: 5,
        title: "Webs Funcionando",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/SKRTEEEEEE/frontpruebas",
        urlDemo: "#",
        operative: true,
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
        operative: false,
    }
];

export const web3page = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos.",
        imageUrl: "/profile2.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
    {
        id: 3,


        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones.",
        imageUrl: "/profile4.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ",
        imageUrl: "/profile6.png",
        urlGithubWeb: "#!",
        urlDemo: "#!",
        urlGithubBlock: "#!",
    },
];