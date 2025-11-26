import { FaJava } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiMysql, SiAngular, SiSymfony, SiPostgresql } from "react-icons/si";
import fotoManuela from '../assets/img/fotoManuela.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 py-20 bg-white"
    >

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl mt-14 overflow-x-hidden">
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-[#FF7F50]"> Hola, soy Manuela Mendoza </h1>

        <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-4 mb-6"> Desarrolladora Web Junior • Frontend & Backend </h2>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 mb-2 text-center md:text-justify">
          Apasionada por la creación de aplicaciones web modernas, funcionales y con un diseño atractivo. 
          Me gusta transformar ideas en experiencias digitales intuitivas, cuidando cada detalle a nivel visual y técnico.
        </p>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-600 mb-2 text-center md:text-justify">
          En este portfolio podrás conocer un poco más sobre mí, descubrir los proyectos en los que he trabajado y encontrar 
          la forma de ponerte en contacto conmigo.
        </p>

        <a
          href="#proyects"
          className="bg-[#adebb3] text-[#414040] px-8 py-3 mt-10 mb-10 rounded-full font-medium transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#9ed6a4]"
        >
          Ver proyectos
        </a>

        <h2 className="font-poppins text-base sm:text-base md:text-2xl font-bold text-gray-600 mt-4 mb-2"> Habilidades: </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start mt-8 text-4xl">
          <SiHtml5 className="text-[#E34F26]" title="HTML5" />
          <SiCss3 className="text-[#1572B6]" title="CSS3" />
          <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />
          <SiTypescript className="text-[#3178C6]" title="TypeScript" />
          <FaJava className="text-[#f44236]" title="Java"/>
          <SiPhp className="text-[#777BB4]" title="PHP" />
          <SiReact className="text-[#61DBFB]" title="React" />
          <SiAngular className="text-[#DD0031]" title="Angular" />
          <SiSymfony className="text-[#000000]" title="Symfony" />
          <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
          <SiMysql className="text-[#4479A1]" title="MySQL" />
        </div>
      </div>

      <div className="flex justify-center md:justify-end mb-10 md:mb-0 md:ml-12">
        <img
          src={fotoManuela}
          alt="Foto de Manuela Mendoza"
          className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

    </section>
  );
}