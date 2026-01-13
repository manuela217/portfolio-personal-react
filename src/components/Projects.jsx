import { motion } from 'framer-motion';
import fotoPortfolioReact from '../assets/img/proyectoPortfolioReact.png';
import fotoPortfolio from '../assets/img/proyectoPortfolio.png';  
import fotoGestorTareas from '../assets/img/proyectoGestorTareas.png';  
import fotoECommerce from '../assets/img/proyectoECommerce.jpg';  

export default function Proyects () { 
  return ( 
    <section id="proyects" className="flex flex-col items-center text-center px-6 py-20"> 
    
      <h2 className="font-poppins text-4xl text-[#FF7F50] font-bold text-center mb-12"> Proyectos </h2> 
        
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"> 
        
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoPortfolioReact} alt="Portfolio personal React" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Portfolio personal (React + Vite) </h3> 
            <p className="text-gray-600 mt-2"> 
              Portfolio desarrollado con React y Tailwind CSS para mostrar mis proyectos, habilidades y formas de contacto. Totalmente responsive y 
              con un diseño moderno. Este es mi segundo portfolio personal, creado en React utilizando Vite para un rendimiento superior y una 
              estructura moderna. Con este proyecto busco mostrar mis capacidades en el ecosistema frontend actual, incluyendo componentes reutilizables, 
              animaciones suaves con Framer Motion y navegación fluida. La estética sigue un estilo más moderno y elegante, con tarjetas animadas, un 
              sistema de proyectos dinámicos y un diseño responsive completamente adaptado, incluyendo un menú hamburguesa en versión móvil.
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
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoPortfolio} alt="Portfolio personal" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Portfolio personal (sin framework) </h3> 
            <p className="text-gray-600 mt-2"> 
              Portfolio creado desde cero utilizando HTML, CSS y JavaScript puro. Proyecto que demuestra el dominio de las tecnologías base sin frameworks. 
              La intención es mostrar mis conocimientos fundamentales en maquetación, diseño visual, estructura, componentes reutilizables y pequeñas 
              interacciones en JavaScript. Incluye un diseño totalmente personalizado, tipografías limpias, secciones organizadas y animaciones suaves. 
              Además, añadí funcionalidad como un botón para copiar el email al portapapeles. 
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

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        > 
          <img src={fotoGestorTareas} alt="Proyecto personal full stack" className="w-full h-[300px] object-cover" /> 
          <div className="p-6 text-left"> 
            <h3 className="font-poppins text-2xl font-semibold text-[#FF7F50]"> Gestor de tareas (Angular + Symfony + PostgreSQL + Docker) </h3> 
            <p className="text-gray-600 mt-2"> 
              Aplicación full stack para la gestión de tareas construida con Angular en el frontend y Symfony en el backend. He implementado 
              funcionalidades nuevas como validaciones de formularios, buscador dinámico, sistema global de notificaciones, nuevos endpoints 
              en la API REST y mejoras de diseño con Tailwind CSS. Incluye pruebas de la API con Postman, migraciones en PostgreSQL y entorno 
              completo ejecutado en Docker.
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
              (Actualmente en desarrollo). Proyecto full stack orientado a la creación de una plantilla de tienda online para pequeños negocios handmade, 
              diseñada para ser reutilizable y escalable. La aplicación cuenta con un frontend en Angular, centrado en una experiencia 
              de compra visual, clara y responsive, y un backend en Spring Boot que expone una API REST para la gestión de productos, 
              usuarios y pedidos. Este proyecto nace tanto como pieza de portfolio profesional como base para una tienda real, aplicando 
              buenas prácticas de arquitectura, separación de responsabilidades y diseño orientado a producto.
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
        
      </div> 
    </section> 
  );
}