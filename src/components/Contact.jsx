import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaHome } from "react-icons/fa";

export default function Contact () {
  return (
    <section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 bg-gray-50 text-center">

      <h2 className="font-poppins text-4xl text-[#FF7F50] font-bold text-center mb-12"> Contacto </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">

        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[260px] justify-center">
          <h3 className="font-poppins text-xl font-bold mb-2"> Escríbeme </h3>
          <FaEnvelope className="text-[#FF7F50] text-4xl mx-auto mb-4" />
          <p className="text-gray-600 mb-4 text-justify">
            ¿Tienes una propuesta, idea o colaboración en mente?. Estoy abierta a nuevas oportunidades y me encantará leerte.
          </p>
          <a href="mailto:manuela.mendoza.dev@gmail.com" className="text-[#FF7F50] font-medium hover:text-[#adebb3] transition">
            manuela.mendoza.dev@gmail.com
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[260px] justify-center">
          <h3 className="font-poppins text-xl font-bold mb-2"> Sígueme </h3>
          <div className="flex gap-4 text-4xl text-[#FF7F50] mb-4">
            <FaGithub />
            <FaLinkedin />
          </div>
          <p className="text-gray-600 mb-4 text-justify">
            Te espero en mis redes sociales profesionales. Allí comparto mis proyectos, aprendizajes y evolución como desarrolladora web.
          </p>
          <div className="flex gap-6 text-[#FF7F50]">
            <a href="https://github.com/manuela217" target="_blank" className="text-[#FF7F50] font-medium hover:text-[#adebb3] transition"> 
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/manuela-mendoza-barba" target="_blank" className="text-[#FF7F50] font-medium hover:text-[#adebb3] transition"> 
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center min-h-[260px] justify-center">
          <h3 className="font-poppins text-xl font-bold mb-2"> Ubicación </h3>
          <FaMapMarkerAlt className="text-4xl text-[#FF7F50] mb-4" />
          <p className="text-gray-600 mb-1"> Castro-Urdiales, Cantabria, España. </p>
          <p className="text-gray-600 mb-4 text-justify">
            Disponible para trabajo remoto en cualquier ubicación. Horario flexible, con disponibilidad inmediata.
          </p>
        </div>

      </div>
    </section>
  );
}