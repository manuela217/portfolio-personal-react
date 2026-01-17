import { motion } from 'framer-motion';
import fotoPortfolioReact from '../assets/img/proyectoPortfolioReact.png';
import fotoPortfolio from '../assets/img/proyectoPortfolio.png';  
import fotoGestorTareas from '../assets/img/proyectoGestorTareas.png';  
import fotoECommerce from '../assets/img/proyectoECommerce.jpg';  
import fotoNutrition from '../assets/img/proyectoNutricion.png';  

export default function Proyects () { 
  return ( 
    <section id="proyects" className="flex flex-col items-center text-center px-6 py-20"> 
    
      <h2 className="font-poppins text-4xl text-[#FF7F50] font-bold text-center mb-12"> Proyectos </h2> 
        
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"> 

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoNutrition} alt="Proyecto personal full stack" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Sport nutrition platform (PHP + HTML + CSS + JS) </h3> 
            <p className="text-gray-600 mt-2"> 
              Aplicación web full-stack orientada a la gestión profesional de planes de nutrición deportiva, desarrollada como proyecto final del ciclo 
              formativo de Desarrollo de Aplicaciones Web. La plataforma simula un entorno real de trabajo entre nutricionistas y clientes, permitiendo 
              digitalizar todo el proceso: creación y gestión de alimentos, diseño de planes nutricionales personalizados, asignación a usuarios y 
              seguimiento de la evolución física a lo largo del tiempo.
              <br /><br />
              Incluye un panel específico para nutricionistas, desde el que se gestionan alimentos, planes y clientes, y un panel de usuario donde cada 
              cliente puede consultar su plan, editar su perfil y revisar su historial de seguimiento. El proyecto cuenta con roles diferenciados, sistema 
              de autenticación, conexión a base de datos y un CRUD completo siguiendo el patrón MVC, con una arquitectura clara y organizada.
            </p> 
            <div className="flex flex-wrap gap-2 mt-4"> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> PHP </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> HTML </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> CSS </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> JavaScript </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> MySQL </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Git/GitHub </span> 
            </div> 
            <div className="flex gap-4 mt-6">
            </div> 
          </div> 
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoGestorTareas} alt="Proyecto personal full stack" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Task manager (Angular + Symfony + PostgreSQL) </h3> 
            <p className="text-gray-600 mt-2"> 
              Aplicación full-stack para la gestión de tareas desarrollada con Angular en el frontend y Symfony en el backend, como parte de un entorno 
              profesional real. Durante el desarrollo he implementado nuevas funcionalidades como validaciones de formularios, buscador dinámico, 
              sistema global de notificaciones y nuevos endpoints en la API REST.
              <br /><br />
              El proyecto incluye pruebas de la API con Postman, gestión de migraciones en PostgreSQL y un entorno completo ejecutado en Docker. Este 
              trabajo me ha permitido profundizar en la comunicación frontend-backend, el diseño de APIs y el flujo de desarrollo en proyectos reales.
            </p> 
            <div className="flex flex-wrap gap-2 mt-4"> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Angular </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Symfony </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> TypeScript </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Tailwind CSS </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> PostgreSQL </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Docker </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Git/GitHub </span>  
            </div> 
            <div className="flex gap-4 mt-6">
            </div> 
          </div> 
        </motion.div> 

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoECommerce} alt="Proyecto personal full stack" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Plataforma E-commerce handmade (Angular + Spring Boot) </h3> 
            <p className="text-gray-600 mt-2"> 
              Proyecto full-stack actualmente en desarrollo orientado a la creación de una plantilla de tienda online para pequeños negocios handmade, 
              diseñada para ser reutilizable y escalable. La aplicación cuenta con un frontend en Angular, centrado en una experiencia de compra visual, 
              clara y totalmente responsive, y un backend en Spring Boot que expone una API REST para la gestión de productos, usuarios y pedidos.
              <br /><br />
              Este proyecto nace tanto como pieza de portfolio profesional como base para una tienda real, aplicando buenas prácticas de arquitectura, 
              separación de responsabilidades y diseño orientado a producto.
            </p> 
            <div className="flex flex-wrap gap-2 mt-4"> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Angular </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> TypeScript </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Tailwind CSS </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Java </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Spring Boot </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> PostgreSQL </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Git/GitHub </span> 
            </div> 
            <div className="flex gap-4 mt-6">
            </div> 
          </div> 
        </motion.div> 

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoPortfolioReact} alt="Portfolio personal React" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Portfolio personal (React + Vite) </h3> 
            <p className="text-gray-600 mt-2"> 
              Portfolio personal desarrollado con React y Tailwind CSS para mostrar mis proyectos, habilidades y formas de contacto. Este es mi segundo 
              portfolio, creado con React y Vite para lograr un mejor rendimiento y una estructura moderna.
              <br /><br />
              El proyecto pone el foco en el ecosistema frontend actual, con componentes reutilizables, animaciones suaves mediante Framer Motion y una 
              navegación fluida. La estética sigue un estilo moderno y elegante, con tarjetas animadas, diseño responsive y un menú hamburguesa optimizado 
              para móvil.
            </p> 
            <div className="flex flex-wrap gap-2 mt-4"> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> React </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Vite </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Tailwind CSS </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Framer Motion </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Font Awesome </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Adobe Illustrator (branding) </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Git/GitHub </span> 
            </div> 
            <div className="flex gap-4 mt-6"> 
              <a 
                href="https://github.com/manuela217/portfolio-personal-react" 
                target="_blank" 
                className="bg-[#FF7F50] text-white px-8 py-3 mt-10 mb-10 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" > 
                Ver código 
              </a> 
              <a 
                href="https://portfolio-manuela-mendoza-barba.netlify.app/" 
                className="bg-white border-2 border-[#FF7F50] text-[#FF7F50] px-8 py-3 mt-10 mb-10 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" > 
                Ver demo 
              </a> 
            </div> 
          </div> 
        </motion.div> 

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 md:col-span-2 mx-auto max-w-xl"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoPortfolio} alt="Portfolio personal" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Portfolio personal (HTML + CSS + JS) </h3> 
            <p className="text-gray-600 mt-2"> 
              Portfolio creado desde cero utilizando HTML, CSS y JavaScript puro, con el objetivo de mostrar el dominio de las tecnologías base sin 
              frameworks. Este proyecto pone el foco en la maquetación, el diseño visual, la estructura del contenido y la implementación de interacciones 
              en JavaScript.
              <br /><br />
              Incluye un diseño totalmente personalizado, tipografías limpias, secciones bien organizadas y animaciones suaves. Como funcionalidad adicional, 
              incorpora detalles como un botón para copiar el email al portapapeles, cuidando la experiencia de usuario. 
            </p> 
            <div className="flex flex-wrap gap-2 mt-4"> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> HTML </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> CSS </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> JavaScript </span>
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Adobe Illustrator (branding) </span> 
              <span className="bg-[#adebb3] text-gray-800 text-sm px-3 py-1 rounded-full"> Git/GitHub </span> 
            </div> 
            <div className="flex gap-4 mt-6"> 
              <a 
                href="https://github.com/manuela217/portfolio-personal" 
                target="_blank" 
                className="bg-[#FF7F50] text-white px-8 py-3 mt-10 mb-10 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" > 
                Ver código 
              </a> 
              <a 
                href="https://portfolio-manuela-mendoza.netlify.app/" 
                className="bg-white border-2 border-[#FF7F50] text-[#FF7F50] px-8 py-3 mt-10 mb-10 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" > 
                Ver demo 
              </a> 
            </div> 
          </div> 
        </motion.div>  
        
      </div> 
    </section> 
  );
}