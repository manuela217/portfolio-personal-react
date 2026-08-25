import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import fotoGestorTareas from '../assets/img/proyectoGestorTareas.png';  

export default function TaskManager() {

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
                    Task Manager
                </h1>

                <h2 className="text-gray-600 text-xl mt-4">
                    Aplicación Full Stack desarrollada con Angular y Symfony
                </h2>

                <p className="text-gray-600 text-xl mt-4">
                    Angular · Symfony · PostgreSQL · Docker
                </p>

                <img
                src={fotoGestorTareas}
                alt="Gestor de tareas"
                className="rounded-2xl shadow-xl mt-10 w-full"
                />

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Descripción
                    </h2>

                    <p className="text-lg text-gray-700 leading-8">
                        Task Manager es una aplicación Full Stack para la gestión de tareas, desarrollada con Angular en el frontend y 
                        Symfony en el backend dentro de un entorno profesional real.
                    </p>

                    <p className="text-lg text-gray-700 leading-8 mt-6">
                        Durante mi participación en el proyecto he trabajado en la evolución y mejora de la aplicación, implementando nuevas 
                        funcionalidades tanto en el frontend como en el backend y profundizando en la comunicación entre ambos mediante una 
                        API REST.
                    </p>

                </section>
        
                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Características principales
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Gestión de tareas </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Gestión de tareas.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Buscador dinámico.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Validaciones de formularios.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Comunicación frontend-backend </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Integración Angular + Symfony.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Nuevos endpoints en la API REST.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Consumo de servicios desde el frontend.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Notificaciones </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Sistema global de notificaciones con toastr.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Comunicación de eventos entre diferentes partes de la aplicación.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Base de datos </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    PostgreSQL
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Gestión de migraciones.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Entorno de desarrollo </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Ejecución mediante Docker.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Configuración del entorno de desarrollo.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Pruebas </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Pruebas de endpoints mediante Postman.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Comprobación del funcionamiento de la API.
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
                                    Angular
                                </li>
                                <li className="text-gray-600 mt-2">
                                    TypeScript
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Tailwind CSS
                                </li>
                                <li className="text-gray-600 mt-2">
                                    RxJS
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Toastr
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Backend </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Symfony
                                </li>
                                <li className="text-gray-600 mt-2">
                                    PHP
                                </li>
                                <li className="text-gray-600 mt-2">
                                    API REST
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Base de datos </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    PostgreSQL
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Herramientas </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Docker
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Postman
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Git
                                </li>
                                <li className="text-gray-600 mt-2">
                                    GitHub
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
                        El proyecto utiliza una arquitectura basada en la separación entre frontend y backend. Angular se encarga de la 
                        interfaz y la interacción con el usuario, mientras que Symfony proporciona la API REST y la lógica del servidor. 
                        Ambos se comunican mediante peticiones HTTP y utilizan PostgreSQL como sistema de persistencia.
                    </p>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Lo que he aprendido
                    </h2>

                    <p className="text-lg text-gray-700 leading-8 mb-2">
                        Mi participación en este proyecto me ha permitido trasladar conocimientos adquiridos durante mi formación a un 
                        entorno de desarrollo profesional y profundizar en el trabajo con aplicaciones Full Stack.
                    </p>

                    <ul className="list-disc pl-5">
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo de funcionalidades en un proyecto Full Stack real.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Comunicación entre Angular y Symfony mediante APIs REST.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Creación y modificación de endpoints en el backend.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo de formularios y validaciones en Angular.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Implementación de funcionalidades de búsqueda dinámica.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Gestión de notificaciones globales en el frontend.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Gestión de migraciones y persistencia con PostgreSQL.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Uso de Docker para trabajar con un entorno de desarrollo completo.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Pruebas y comprobación de APIs mediante Postman.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Trabajo con un proyecto existente y evolución de funcionalidades sin partir de cero.
                        </li>
                    </ul>

                </section>

                <section className="mt-20 flex gap-6">

                    <Link
                        to="/#proyects"
                        className="bg-[#FF7F50] text-white px-8 py-3 rounded-full"
                    >
                        ← Volver a proyectos
                    </Link>

                </section>

            </main>

            <Footer />
        </>

    );

}