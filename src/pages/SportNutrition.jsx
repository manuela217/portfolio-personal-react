import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import fotoNutrition from '../assets/img/proyectoNutricion.png';  

export default function SportNutrition() {

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
                    Sport Nutrition Platform
                </h1>

                <h2 className="text-gray-600 text-xl mt-4">
                    Plataforma web para la gestión de planes de nutrición deportiva
                </h2>

                <p className="text-gray-600 text-xl mt-4">
                    PHP · HTML · CSS · JavaScript · MySQL
                </p>

                <img
                src={fotoNutrition}
                alt="Plataforma nutrición deportiva"
                className="rounded-2xl shadow-xl mt-10 w-full"
                />

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Descripción
                    </h2>

                    <p className="text-lg text-gray-700 leading-8">
                        Sport Nutrition Platform es una aplicación web Full Stack desarrollada como proyecto final del ciclo formativo de Desarrollo 
                        de Aplicaciones Web. La plataforma simula un entorno de trabajo entre nutricionistas y clientes, digitalizando la gestión de 
                        alimentos, planes nutricionales personalizados y seguimiento de la evolución física.
                    </p>

                    <p className="text-lg text-gray-700 leading-8 mt-6">
                        La aplicación cuenta con diferentes roles de usuario y paneles específicos para nutricionistas y clientes. El proyecto 
                        fue desarrollado desde cero utilizando PHP, HTML, CSS y JavaScript, con una base de datos MySQL y una arquitectura 
                        basada en el patrón MVC.
                    </p>

                </section>
        
                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                        Características principales
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">

                    <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Autenticación y roles </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Registro de usuarios.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Roles diferenciados.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Acceso a funcionalidades según el tipo de usuario.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Gestión de alimentos </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Creación, edición y eliminación de alimentos.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Gestión de información nutricional.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Planes nutricionales </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Creación, edición y eliminación de planes personalizados.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Asignación de planes a clientes.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Gestión de alimentos dentro de los planes.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Gestión de clientes </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Registro y gestión de clientes.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Asignación de planes nutricionales.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Consulta de información y seguimiento.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Panel de nutricionista </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Gestión de alimentos.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Gestión de planes.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Gestión de clientes.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Seguimiento del progreso del cliente.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-lg"> Panel de usuario </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    Consulta del plan asignado.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Edición del perfil.
                                </li>
                                <li className="text-gray-600 mt-2">
                                    Consulta del historial de seguimiento.
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
                            <h3 className="font-poppins text-xl font-bold mb-2"> Backend </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    PHP
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col min-h-[260px]">
                            <h3 className="font-poppins text-xl font-bold mb-2"> Base de datos </h3>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-600 mt-2">
                                    MySQL
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
                                <li className="text-gray-600 mt-2">
                                    phpMyAdmin
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
                        La aplicación sigue el patrón arquitectónico MVC (Model-View-Controller), separando la gestión de los datos, la 
                        lógica de la aplicación y la presentación. Esta organización permite mantener una estructura clara y facilita la 
                        evolución y mantenimiento del proyecto.
                    </p>

                </section>

                <section className="mt-20">

                    <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                        Lo que he aprendido
                    </h2>

                    <p className="text-lg text-gray-700 leading-8 mb-2">
                        El desarrollo de Sport Nutrition Platform me permitió consolidar los fundamentos del desarrollo web Full Stack y 
                        poner en práctica los conocimientos adquiridos durante el ciclo formativo mediante una aplicación completa conectada 
                        a una base de datos.
                    </p>

                    <ul className="list-disc pl-5">
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo de aplicaciones web Full Stack utilizando PHP.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Diseño y desarrollo de interfaces con HTML y CSS.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Implementación de funcionalidades dinámicas con JavaScript.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Diseño y gestión de bases de datos relacionales con MySQL.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Uso del patrón MVC para organizar la aplicación.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Implementación de autenticación y gestión de roles.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Desarrollo de operaciones CRUD.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Comunicación entre la aplicación y la base de datos.
                        </li>
                        <li className="text-lg text-gray-700 leading-8 mb-2">
                            Organización de un proyecto web completo desde cero.
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