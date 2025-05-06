"use client";
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Bandeau supérieur */}
      <div className="bg-[#181e29] text-white text-[1.15rem] flex justify-between items-center px-[4vw] py-2">
        <div className="flex items-center space-x-8">
          <span className="inline-flex items-center gap-2 text-lg"><FaPhoneAlt className="inline text-xl" /> 01 48 30 45 70</span>
          <span className="inline-flex items-center gap-2 text-lg"><FaEnvelope className="inline text-xl" /> info@distritherm.fr</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold no-underline text-lg"><FaUser className="text-blue-400 text-xl" /> Contact</a>
          <span className="text-[#1abc9c] inline-flex items-center gap-2 cursor-pointer text-lg"><FaPhoneAlt className="inline text-xl" /> Rappel-moi</span>
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center py-3 px-8">
          {/* Logo à gauche */}
          <div className="flex-shrink-0 flex items-center" style={{ minWidth: '160px' }}>
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image 
                src="/logo-transparent.png" 
                alt="Distritherm" 
                width={160} 
                height={56} 
                className="h-14 object-contain" 
              />
            </Link>
          </div>

          {/* Menu centré */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-14 items-center">
              <li>
                <Link 
                  href="/" 
                  className="group text-[#222] font-semibold text-lg relative hover:text-[#159b8a] transition-colors duration-200 after:absolute after:w-full after:h-0.5 after:bg-[#159b8a] after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">Accueil</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/qui-sommes-nous" 
                  className="group text-[#222] font-semibold text-lg relative hover:text-[#159b8a] transition-colors duration-200 after:absolute after:w-full after:h-0.5 after:bg-[#159b8a] after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">L&apos;Entreprise</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/famille-produits" 
                  className="group text-[#222] font-semibold text-lg relative hover:text-[#159b8a] transition-colors duration-200 after:absolute after:w-full after:h-0.5 after:bg-[#159b8a] after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">Produits</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/recrutement" 
                  className="group text-[#222] font-semibold text-lg relative hover:text-[#159b8a] transition-colors duration-200 after:absolute after:w-full after:h-0.5 after:bg-[#159b8a] after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">Carrières</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="group text-[#222] font-semibold text-lg relative hover:text-[#159b8a] transition-colors duration-200 after:absolute after:w-full after:h-0.5 after:bg-[#159b8a] after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bouton à droite */}
          <div className="flex-shrink-0 flex items-center ml-12" style={{ minWidth: '120px', justifyContent: 'flex-end' }}>
            <button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-semibold py-3 px-8 rounded transition-all duration-300 text-lg hover:shadow-lg hover:translate-y-[-1px] active:translate-y-[1px]">
              Obtenir un devis
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 