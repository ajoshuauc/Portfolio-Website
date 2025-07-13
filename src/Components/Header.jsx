import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="flex justify-between items-center sticky text-textcolor py-3 px-8 md:px-32 bg-primary drop-shadow-md top-0 z-10">
      <a href="#">
        <p className="font-extrabold text-secondary p-3">Anthony Cagampang</p>
      </a>

      <a
        href="https://drive.google.com/drive/folders/1RZZnGzu6ElpJEzHeV1dqkn1GNoK8hnla?usp=sharing" // Replace with your actual file path
        target="_blank"
        rel="noreferrer"
        className="md:hidden not-first:px-3 py-2 rounded-full bg-secondary text-slate-900 text-xs font-semibold hover:bg-[#a1f6ff] transition-all duration-300 shadow-md hover:shadow-[0_0_10px_#A1F6FF] flex items-center gap-2"
      >
        Download Resume
      </a>


      {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-12 font-medium text-base">

          <li>
            <a href="#Expertise" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Expertise
            </a>
          </li>

          <li>
            <a href="#TechStack" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Tech Stack
            </a>
          </li>

          <li>
            <a href="#Projects" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Projects
            </a>
          </li>


            {/* <li className="p-3 hover:bg-secondary hover:text-white rounded-md transition-all cursor-pointer">Education</li> */}

          <li>
            <a href="#EducAndExpi" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Education & Experience
            </a>
          </li>

          <li>
            <a href="#Contacts" className="p-3 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Contacts
            </a>
          </li>
        </ul>

      {/* Burger Icon */}
      <div className="xl:hidden block z-50">
          <button><span className={`material-symbols-outlined text-2xl, p-2 cursor-pointer ${menuOpen ? "opacity-0": "opacity-100"}`} onClick={() => setMenuOpen(!menuOpen)}>menu</span></button>
      </div>

      {/* Mobile Menu */}
      <ul className={`absolute xl:hidden top-18 h-screen right-0 z-50 w-1/5 sm:w-1/5 bg-primary flex flex-col items-center gap-6 font-medium text-lg transform transition-transform ${menuOpen ? "opacity-100" : "opacity-0 hidden"}`} style={{transition: "transition 0.2s ease, opacity 0.2s ease"}}>
          <li className="list-none"><button><span className="material-symbols-outlined text-4xl p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>close</span></button></li>

          <li>
            <a href="#Expertise" className="p-5 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Expertise
            </a>
          </li>

          <li>
            <a href="#TechStack" className="p-5 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Tech Stack
            </a>
          </li>

          <li>
            <a href="#Projects" className="p-5 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Projects
            </a>
          </li>

          <li>
            <a href="#EducAndExpi" className="p-5 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Education & Experience
            </a>
          </li>

          <li>
            <a href="#Contacts" className="p-5 block w-full text-center hover:underline hover:text-white rounded-md transition-all cursor-pointer">
              Contacts
            </a>
          </li>
      </ul>
    </nav>

  );
}
