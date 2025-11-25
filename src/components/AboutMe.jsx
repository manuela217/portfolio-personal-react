import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <section id="aboutMe" className="px-6 py-20 bg-gray-50">

            <h2 className="font-poppins text-4xl text-[#FF7F50] font-bold text-center mb-12"> Sobre mí </h2>

            <div className="relative max-w-6xl mx-auto px-4">

                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FF7F50] rounded-full"></div>

                <div className="space-y-10">

                    <motion.div
                        className="relative flex flex-col md:flex-row items-center md:justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF7F50] rounded-full shadow-md"></div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 md:mr-auto md:text-right md:-translate-x-5">
                            <h3 className="font-poppins text-xl font-semibold text-gray-800"> Formación </h3>
                            <p className="text-sm text-gray-500"> Desde administración y finanzas hasta desarrollo web </p>
                            <p className="mt-2 text-gray-700 text-justify">
                                Comencé mi trayectoria con el título de Técnico Superior en Administración y Finanzas,
                                lo que me aportó una base sólida en gestión y análisis de procesos. Más tarde obtuve el Certificado
                                de Profesionalidad en Creación y Publicación de Páginas Web y Diseño Gráfico, adquiriendo conocimientos
                                en HTML5, CSS3 y JavaScript. Más adelante cursé el Técnico Superior en Desarrollo de Aplicaciones Web,
                                donde consolidé y amplié mis habilidades en programación y diseño web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex flex-col md:flex-row items-center md:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF7F50] rounded-full shadow-md"></div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 md:ml-auto md:text-left md:translate-x-5">
                            <h3 className="font-poppins text-xl font-semibold text-gray-800"> Experiencia profesional previa </h3>
                            <p className="text-sm text-gray-500"> Administración, emprendimiento y gestión </p>
                            <p className="mt-2 text-gray-700 text-justify">
                                Durante varios años trabajé como administrativa, desarrollando competencias como organización,
                                comunicación efectiva y atención al detalle. Posteriormente emprendí un negocio propio en el sector
                                de la hostelería, gestionando todas las áreas del negocio: administración, control financiero,
                                atención al cliente y coordinación del equipo. Esta etapa reforzó mi liderazgo, capacidad de decisión
                                y visión estratégica.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex flex-col md:flex-row items-center md:justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF7F50] rounded-full shadow-md"></div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 md:mr-auto md:text-right md:-translate-x-5">
                            <h3 className="font-poppins text-xl font-semibold text-gray-800"> Reinventándome </h3>
                            <p className="text-sm text-gray-500"> Del emprendimiento al desarrollo web </p>
                            <p className="mt-2 text-gray-700 text-justify">
                                Decidí dar un giro profesional hacia el mundo del desarrollo web, mi verdadera pasión.
                                Realicé mis prácticas como desarrolladora trabajando con Angular, Symfony, PostgreSQL, Docker,
                                Git y GitHub, aplicando mis conocimientos en entornos colaborativos y proyectos reales. Esto me
                                permitió adquirir una visión más completa del flujo de trabajo y fortalecer mis habilidades técnicas.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex flex-col md:flex-row items-center md:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF7F50] rounded-full shadow-md"></div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/2 md:ml-auto md:text-left md:translate-x-5">
                            <h3 className="font-poppins text-xl font-semibold text-gray-800"> Lo que aporto </h3>
                            <p className="text-sm text-gray-500"> Perfil técnico + gestión + visión humana </p>
                            <p className="mt-2 text-gray-700 text-justify">
                                Combino mi formación técnica con mi experiencia en gestión y atención al cliente, lo que me permite
                                abordar los proyectos desde una perspectiva integral. Me caracterizo por la constancia, la iniciativa
                                y la orientación a resultados. Mi objetivo es seguir creciendo como desarrolladora web y aportar valor
                                a cada proyecto con creatividad, calidad y compromiso.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>

        </section>
  );
}