import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import fotoPortfolio from '../assets/img/proyectoPortfolio.png';  

export default function PortfolioPersonal() {

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
                    Portfolio personal
                </h1>

                <h2 className="text-gray-600 text-xl mt-4">
                    Proyecto personal de portfolio desarrollado desde cero sin frameworks
                </h2>

                <p className="text-gray-600 text-xl mt-4">
                    HTML5 · CSS3 · JavaScript
                </p>

                <img
                src={fotoPortfolio}
                alt="Foto portfolio personal"
                className="rounded-2xl shadow-xl mt-10 w-full"
                />

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Descripción
                    </h2>

                    <p className="text-lg text-gray-700 leading-8">
                        Este proyecto es mi primer portfolio personal, desarrollado desde cero utilizando HTML5, CSS3 y JavaScript puro, 
                        sin frameworks ni plantillas. Su objetivo principal fue poner en práctica los fundamentos del desarrollo frontend y 
                        demostrar que podía construir una interfaz completa partiendo de una base tecnológica sencilla.
                    </p>

                    <p className="text-lg text-gray-700 leading-8 mt-6">
                        El diseño, la estructura y la identidad visual fueron creados específicamente para el proyecto, prestando especial 
                        atención a la organización del contenido, la experiencia de usuario y la adaptación a diferentes tamaños de pantalla.
                    </p>

                </section>
        
                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Características principales
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">

                    <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Diseño y maquetación </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Diseño personalizado desde cero.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Estructura organizada por secciones.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Diseño responsive.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Tipografías y elementos visuales personalizados.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Interactividad </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Funcionalidades implementadas con JavaScript.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Botón para copiar el email al portapapeles.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Animaciones y transiciones.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Navegación entre las diferentes secciones.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Identidad visual </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Branding propio.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Recursos gráficos creados con Adobe Illustrator.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Diseño coherente de colores, tipografías y elementos de interfaz.
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Stack tecnológico
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 w-full">
                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Frontend </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    HTML5
                                </li>
                                <li className="text-gray-600 mt-2">
                                    CSS3
                                </li>
                                <li className="text-gray-600 mt-2">
                                    JavaScript
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Diseño </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Adobe Illustrator
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Herramientas </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Git
                                </li>
                                <li className="text-gray-600 mt-2">
                                    GitHub
                                </li>
                                <li className="text-gray-600 mt-2">
                                    XAMPP
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Arquitectura
                    </h2>

                    <p className="text-lg text-gray-700 leading-8 mb-2">
                        El proyecto está estructurado separando la estructura del contenido, los estilos y la lógica de interacción en 
                        archivos HTML, CSS y JavaScript independientes. Al no utilizar frameworks, la interfaz y las funcionalidades se 
                        han desarrollado directamente sobre las tecnologías base del navegador.
                    </p>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Lo que he aprendido
                    </h2>

                    <p className="text-lg text-gray-700 leading-8 mb-2">
                        Este proyecto me permitió consolidar los fundamentos del desarrollo frontend y comprender mejor cómo se construye 
                        una interfaz web desde cero antes de trabajar con frameworks y herramientas más avanzadas.
                    </p>

                    <ul className="list-disc pl-5">
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Maquetación de interfaces utilizando HTML5 y CSS3.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Organización y estructuración de contenido web.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo de interacciones mediante JavaScript.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Diseño responsive y adaptación a diferentes dispositivos.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Implementación de animaciones y transiciones con CSS.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Manipulación del DOM mediante JavaScript.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Uso de APIs del navegador, como el portapapeles.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Creación de una identidad visual y aplicación coherente del diseño.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Uso de Git y GitHub para el control de versiones.
                        </li>
                    </ul>

                </section>

                <section className="mt-20 flex gap-6">

                    <a
                        href="https://github.com/manuela217/portfolio-personal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF7F50] text-white px-8 py-3 rounded-full"
                    >
                        Ver repositorio →
                    </a>

                    <a
                        href="https://portfolio-manuela-mendoza.netlify.app/"
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