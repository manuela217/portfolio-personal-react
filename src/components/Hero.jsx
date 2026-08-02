import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiDocker, SiPostman, SiGit, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiMysql, SiAngular, SiSymfony, SiPostgresql } from "react-icons/si";
import fotoManuela from '../assets/img/fotoManuela.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-start md:justify-center px-4 sm:px-8 pt-28 pb-12 md:py-16 bg-white"
    >

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mt-4 md:mt-14 overflow-x-hidden">
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-[#FF7F50]"> Hola, soy Manuela Mendoza </h1>

        <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-4 mb-6"> Desarrolladora Web Junior • Frontend & Backend </h2>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 mb-2 text-center md:text-justify">
          Desarrollo aplicaciones web con un enfoque práctico, cuidando tanto la funcionalidad como la experiencia de usuario. 
          Me gusta trabajar con interfaces claras, código bien organizado y soluciones pensadas para un uso real.
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 mb-2 text-center md:text-justify">
          En este portfolio encontrarás una selección de los proyectos en los que he trabajado, mi trayectoria como desarrolladora web y las distintas 
          formas de contacto.
        </p>

        <h2 className="font-poppins text-lg md:text-2xl font-bold text-gray-700 mt-6 mb-3"> Stack tecnológico: </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start mt-4 text-4xl">
          <FaJava className="text-[#f44236]" title="Java"/>
          <SiSpringboot className="text-[#6DB33F]" title="Spring Boot" />
          <SiPhp className="text-[#777BB4]" title="PHP" />
          <SiSymfony className="text-[#000000]" title="Symfony" />
          <SiReact className="text-[#61DBFB]" title="React" />
          <SiAngular className="text-[#DD0031]" title="Angular" />
          <SiHtml5 className="text-[#E34F26]" title="HTML5" />
          <SiCss3 className="text-[#1572B6]" title="CSS3" />
          <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />
          <SiTypescript className="text-[#3178C6]" title="TypeScript" />
          <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
          <SiMysql className="text-[#4479A1]" title="MySQL" />
          <SiDocker className="text-[#2496ED]" title="Docker" />
          <SiGit className="text-[#F05032]" title="Git" />
          <SiPostman  className="text-[#FF6C37]" title="Postman" />
        </div>

        <a
          href="#proyects"
          className="bg-[#adebb3] text-[#414040] px-8 py-3 mt-8 mb-6 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#9ed6a4]"
        >
          Ver proyectos
        </a>
      </div>

      <div className="flex justify-center md:justify-end mb-4 md:mb-0 md:ml-12">
        <img
          src={fotoManuela}
          alt="Foto de Manuela Mendoza"
          className="w-44 h-44 md:w-72 md:h-72 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

    </section>
  );
}