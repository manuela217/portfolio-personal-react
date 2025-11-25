import { useState } from "react";
import logo from '../assets/img/logotipo.png';

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const closeMenu = () => setIsNavbarOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white h-20 sm:h-24 z-50">
      <div className="relative bg-white shadow-xl ring-1 ring-gray-900/5">
        <nav className="px-8 sm:px-18 py-4 sm:flex sm:items-center sm:justify-between">
          <section className="flex justify-between w-full sm:w-auto">
            <a href="/">
              <img
                  src={logo}
                  alt="Logotipo Manuela Mendoza"
                  className="w-40 h-auto md:w-64 md:h-auto"
              />
            </a>
            <button className="text-gray-700 sm:hidden" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
              <img src="/burgerMenu.svg" alt="Menú hamburguesa" className="w-8 h-8" />
            </button>
          </section>

          <div className={`${isNavbarOpen ? "flex" : "hidden"} flex-col items-start mt-3 gap-2 sm:flex sm:flex-row sm:gap-8 sm:m-0`}>
            <a
              href="#aboutMe"
              onClick={closeMenu}
              className="font-poppins text-[#FF7F50] text-2xl sm:text-3xl font-bold transition hover:scale-110 hover:text-[#adebb3] w-full text-left"
            >
              Sobre mí
            </a>
            <a
              href="#proyects"
              onClick={closeMenu}
              className="font-poppins text-[#FF7F50] text-2xl sm:text-3xl font-bold transition hover:scale-110 hover:text-[#adebb3] w-full text-left"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="font-poppins text-[#FF7F50] text-2xl sm:text-3xl font-bold transition hover:scale-110 hover:text-[#adebb3] hover:underline-offset-8 w-full text-left"
            >
              Contacto
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
