"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import RappelModal from '../modals/RappelModal';

const Navbar: React.FC = () => {
  const [isRappelModalOpen, setIsRappelModalOpen] = useState(false);

  const openRappelModal = () => {
    setIsRappelModalOpen(true);
  };

  const closeRappelModal = () => {
    setIsRappelModalOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Bandeau supérieur */}
      <div className="bg-[#181e29] text-white text-[1.15rem] flex justify-between items-center px-[4vw] py-2 animate-navbar-fadein">
        <div className="flex items-center space-x-8">
          <span className="inline-flex items-center gap-2 text-lg transition-transform duration-200 hover:scale-110"><FaPhoneAlt className="inline text-xl" /> 01 48 30 45 70</span>
          <span className="inline-flex items-center gap-2 text-lg transition-transform duration-200 hover:scale-110"><FaEnvelope className="inline text-xl" /> info@distritherm.fr</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold no-underline text-lg transition-transform duration-200 hover:scale-105"><FaUser className="text-blue-400 text-xl" /> Contact</a>
          <span 
            className="text-[#1abc9c] inline-flex items-center gap-2 cursor-pointer text-lg animate-pulse-glow p-2 rounded-lg hover:bg-[#181e29]/30 transition-all duration-300"
            onClick={openRappelModal}
          >
            <FaPhoneAlt className="inline text-xl" /> Rappel-moi
          </span>
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="border-b border-gray-200 bg-white animate-navbar-slidein">
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
            <ul className="flex space-x-14 items-center animate-navbar-menu-fadein">
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
                  <span className="inline-block transition-transform duration-200 group-hover:transform group-hover:translate-y-[-2px]">Univers Produit</span>
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
            <button className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 hover:scale-105 focus:scale-95 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Obtenir un devis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal de rappel */}
      <RappelModal isOpen={isRappelModalOpen} onClose={closeRappelModal} />

      {/* Animations CSS custom */}
      <style jsx global>{`
        @keyframes navbar-fadein {
          0% { opacity: 0; transform: translateY(-24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-navbar-fadein {
          animation: navbar-fadein 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s both;
        }
        @keyframes navbar-slidein {
          0% { opacity: 0; transform: translateY(-32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-navbar-slidein {
          animation: navbar-slidein 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both;
        }
        @keyframes navbar-menu-fadein {
          0% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-navbar-menu-fadein {
          animation: navbar-menu-fadein 1.1s cubic-bezier(0.4,0,0.2,1) 0.6s both;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(26,188,156,0.5); }
          50% { box-shadow: 0 0 16px 6px rgba(26,188,156,0.25); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.8s infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar; 