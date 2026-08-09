import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import fotoECommerce from "../assets/img/proyectoECommerce.png";

export default function HandmadeShop() {

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
          Handmade Shop Full Stack
        </h1>

        <h2 className="text-gray-600 text-xl mt-4">
            Aplicación e-commerce desarrollada con Angular y Spring Boot
        </h2>

        <p className="text-gray-600 text-xl mt-4">
            Angular • Spring Boot • PostgreSQL • JWT • REST API
        </p>

        <img
          src={fotoECommerce}
          alt="Handmade Shop"
          className="rounded-2xl shadow-xl mt-10 w-full"
        />

        <section className="mt-20">

            <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                Descripción
            </h2>

            <p className="text-lg text-gray-700 leading-8">
                Handmade Shop es una aplicación Full Stack desarrollada como proyecto de portfolio con el objetivo de simular una plataforma 
                e-commerce para pequeños negocios artesanales.
            </p>

            <p className="text-lg text-gray-700 leading-8 mt-6">
                El proyecto combina un frontend desarrollado con Angular y un backend desarrollado con Spring Boot, comunicados mediante 
                una API REST. Durante su desarrollo he trabajado con autenticación JWT, gestión de roles, PostgreSQL y Arquitectura 
                Hexagonal, además de adaptar y mejorar diferentes partes de la implementación para acercarla a un proyecto real.
            </p>

        </section>

        <section className="mt-20">

            <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-6">
                Características principales
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Autenticación y autorización </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Registro e inicio de sesión mediante JWT.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Roles ADMIN y USER.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Protección de rutas y recursos.
                        </li>
                    </ul>
                </div>
                

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Gestión de productos </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Catálogo y detalle de productos.
                        </li>
                        <li className="text-gray-600 mt-2">
                            CRUD completo de productos.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Gestión de imágenes mediante multipart/form-data.
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Gestión de categorías </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            CRUD completo de categorías.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Asociación de productos a categorías.
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Carrito y pedidos </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Carrito persistente durante la sesión.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Cálculo automático del importe total.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Creación y confirmación de pedidos.
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Panel de administración </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Gestión de productos y categorías
                        </li>
                        <li className="text-gray-600 mt-2">
                            Gestión de usuarios (en construcción).
                        </li>
                        <li className="text-gray-600 mt-2">
                            Gestión de pedidos (en construcción).
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="font-semibold text-lg"> Experiencia de usuario </h3>
                    <ul className="list-disc pl-5">
                        <li className="text-gray-600 mt-2">
                            Diseño completamente responsive con Tailwind CSS.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Navegación mediante Angular Router y Guards.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Notificaciones mediante Toastr.
                        </li>
                        <li className="text-gray-600 mt-2">
                            Validaciones de formularios.
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
                            Angular Router
                        </li>
                        <li className="text-gray-600 mt-2">
                            HttpClient
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
                            Java 21
                        </li>
                        <li className="text-gray-600 mt-2">
                            Spring Boot
                        </li>
                        <li className="text-gray-600 mt-2">
                            Spring Security
                        </li>
                        <li className="text-gray-600 mt-2">
                            JWT
                        </li>
                        <li className="text-gray-600 mt-2">
                            Spring Data JPA
                        </li>
                        <li className="text-gray-600 mt-2">
                            MapStruct
                        </li>
                        <li className="text-gray-600 mt-2">
                            Lombok
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
                            Maven
                        </li>
                        <li className="text-gray-600 mt-2">
                            Git
                        </li>
                        <li className="text-gray-600 mt-2">
                            GitHub
                        </li>
                        <li className="text-gray-600 mt-2">
                            Docker
                        </li>
                        <li className="text-gray-600 mt-2">
                            Postman
                        </li>
                        <li className="text-gray-600 mt-2">
                            pgAdmin
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
                El proyecto está dividido en un frontend desarrollado con Angular y un backend desarrollado con Spring Boot, comunicados 
                mediante una API REST. El backend sigue una Arquitectura Hexagonal, separando el dominio, la lógica de aplicación y la 
                infraestructura, mientras que el frontend está organizado por funcionalidades mediante componentes, servicios, modelos y 
                rutas protegidas.
            </p>

        </section>

        <section className="mt-20">

            <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                Lo que he aprendido
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-2">
                El desarrollo de Handmade Shop me ha permitido consolidar conocimientos de desarrollo Full Stack y profundizar 
                especialmente en la comunicación entre frontend y backend, la arquitectura de aplicaciones y la seguridad.
            </p>

            <ul className="list-disc pl-5">
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Desarrollo de aplicaciones Full Stack con Angular y Spring Boot.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Diseño y consumo de APIs REST y comunicación entre frontend y backend.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Implementación de autenticación mediante JWT y autorización con Spring Security.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Gestión de roles y protección de rutas tanto en Angular como en el backend.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Aplicación de Arquitectura Hexagonal para separar dominio, lógica de aplicación e infraestructura.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Persistencia de datos mediante Spring Data JPA y PostgreSQL.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Gestión de subida de imágenes mediante multipart/form-data.
                </li>
            </ul>

        </section>

        <section className="mt-20">

            <h2 className="font-poppins text-3xl font-bold text-[#FF7F50] mb-4">
                Próximas mejoras
            </h2>

            <ul className="list-disc pl-5">
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Gestión de usuarios y pedidos desde el panel de administración.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Perfil e historial de pedidos para usuarios.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Gestión centralizada de errores HTTP.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Tests unitarios e integración.
                </li>
                <li className="text-lg text-gray-700 leading-8 mb-2">
                    Docker Compose y despliegue.
                </li>
            </ul>

        </section>

        <section className="mt-20 flex gap-6">

            <a
                href="https://github.com/manuela217/handmade-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7F50] text-white px-8 py-3 rounded-full"
            >
                Ver repositorio →
            </a>

            <button
                disabled
                className="border-2 border-[#FF7F50] text-[#FF7F50] px-8 py-3 rounded-full opacity-60 cursor-not-allowed"
            >
                Demo próximamente
            </button>

        </section>

      </main>

      <Footer />
    </>

  );

}