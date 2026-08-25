import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import fotoPortfolioReact from '../assets/img/proyectoPortfolioReact.png';

export default function PortfolioReact() {

    return (

        <>
            <Header />

            <main className="max-w-6xl mx-auto px-6 pt-36 pb-20">

                <Link
                to="/#proyects"
                className="text-[#FF7F50] font-semibold hover:underline"
                >
                ← Volver a proyectos
                </Link>

                <h1 className="font-poppins text-5xl font-bold text-[#FF7F50] mt-8">
                    Portfolio personal (React + Vite)
                </h1>

                <p className="text-gray-600 text-xl mt-4">
                    React · Vite · Tailwind CSS · Framer Motion
                </p>

                <img
                src={fotoPortfolioReact}
                alt="Portfolio React"
                className="rounded-2xl shadow-xl mt-10 w-full"
                />

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Descripción
                    </h2>

                    <p className="text-lg text-gray-700 leading-8">
                        Este portfolio personal ha sido desarrollado con React y Vite como evolución de mi primer portfolio, creado con HTML, 
                        CSS y JavaScript puro. El objetivo era construir una versión más moderna y escalable, aplicando un enfoque basado en 
                        componentes reutilizables y tecnologías actuales del ecosistema frontend.
                    </p>

                    <p className="text-lg text-gray-700 leading-8 mt-6">
                        El proyecto incluye un diseño responsive, navegación entre páginas, animaciones mediante Framer Motion y una interfaz 
                        adaptada tanto a escritorio como a dispositivos móviles. También incorpora una estructura preparada para ampliar el 
                        portfolio con páginas de detalle independientes para cada proyecto.
                    </p>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Características principales
                    </h2>

                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Diseño responsive.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Navegación.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Animaciones.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Menú hamburguesa versión móvil.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Sección de proyectos clicables.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Formas de contacto.
                        </li>
                    </ul>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Stack tecnológico
                    </h2>

                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            React
                        </li>
                        <li className="text-gray-600 mt-2">
                            Vite
                        </li>
                        <li className="text-gray-600 mt-2">
                            Tailwind CSS
                        </li>
                        <li className="text-gray-600 mt-2">
                            Framer Motion
                        </li>
                        <li className="text-gray-600 mt-2">
                            React Icons / Font Awesome
                        </li>
                        <li className="text-gray-600 mt-2">
                            Git/GitHub
                        </li>
                        <li className="text-gray-600 mt-2">
                            Adobe Illustrator para branding
                        </li>
                    </ul>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Arquitectura
                    </h2>

                    <p className="text-lg text-gray-700 leading-8 mb-2">
                        El proyecto está organizado mediante componentes reutilizables, separando las distintas secciones del portfolio y 
                        facilitando su mantenimiento y evolución. La aplicación utiliza React para la construcción de la interfaz y Vite 
                        como herramienta de desarrollo y build.
                    </p>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Lo que he aprendido
                    </h2>

                    <ul className="list-disc pl-5">
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo y organización de un proyecto con React.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Componentización y reutilización.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Gestión de estilos y diseño responsive con Tailwind.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Animaciones con Framer Motion.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Configuración y desarrollo con Vite.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Navegación con React Router.
                        </li>
                    </ul>

                </section>

                <section className="mt-20 flex gap-6">

                    <a
                        href="https://github.com/manuela217/portfolio-personal-react" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF7F50] text-white px-8 py-3 rounded-full"
                    >
                        Ver repositorio →
                    </a>

                    <a
                        href="https://portfolio-manuela-mendoza-barba.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#FF7F50] text-[#FF7F50] px-8 py-3 rounded-full"
                    >
                        Ver demo →
                    </a>

                </section>

            </main>

            <Footer />
        </>

    );

}