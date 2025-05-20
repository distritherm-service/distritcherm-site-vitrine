"use client";
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import RappelModal from '../modals/RappelModal';

const Navbar: React.FC = () => {
  const [isRappelModalOpen, setIsRappelModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fermer le menu au clic n'importe où
  useEffect(() => {
    const handleClick = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMobileMenuOpen]);

  const openRappelModal = () => {
    setIsRappelModalOpen(true);
  };

  const closeRappelModal = () => {
    setIsRappelModalOpen(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher la propagation du clic sur le bouton
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Bandeau supérieur */}
      <div className="bg-[#181e29] text-white text-[1.15rem] flex flex-wrap justify-between items-center px-[4vw] py-2 animate-navbar-fadein">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="tel:0148304570" className="inline-flex items-center gap-2 text-sm md:text-lg transition-transform duration-200 hover:scale-110">
            <FaPhoneAlt className="inline text-xl" /> 
            <span>01 71 68 72 12 </span>
          </Link>
          <Link href="mailto:info@distritherm.fr" className="inline-flex items-center gap-2 text-sm md:text-lg transition-transform duration-200 hover:scale-110">
            <FaEnvelope className="inline text-xl" /> 
            <span className="hidden sm:inline">info@distritherm-services.fr</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold no-underline text-sm md:text-lg transition-transform duration-200 hover:scale-105">
            <FaUser className="text-blue-400 text-xl" /> 
          </Link> */}
          <span 
            className="text-[#1abc9c] inline-flex items-center gap-2 cursor-pointer text-sm md:text-lg animate-pulse-glow p-2 rounded-lg hover:bg-[#181e29]/30 transition-all duration-300"
            onClick={openRappelModal}
          >
            <FaPhoneAlt className="inline text-xl" /> Rappelez-moi
          </span>
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="border-b border-gray-200 bg-white animate-navbar-slidein">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 sm:py-3 px-4 md:px-8">
          {/* Logo à gauche */}
          <div className="flex-shrink-0 flex items-center" style={{ minWidth: '140px', maxWidth: '200px' }}>
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <Image 
                src="/logods.png" 
                alt="Distritherm" 
                width={200} 
                height={70} 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain" 
                priority
              />
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-600" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Menu centré - Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 lg:space-x-14 items-center animate-navbar-menu-fadein">
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

          {/* Bouton devis - Desktop */}
          <div className="hidden md:flex flex-shrink-0 items-center ml-12" style={{ minWidth: '120px', justifyContent: 'flex-end' }}>
            <Link href="/contact" className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg hover:shadow-lg hover:shadow-[#38bdf8]/30 hover:scale-105 focus:scale-95 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Obtenir un devis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white border-t border-gray-100 py-4 px-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-[#222] font-semibold text-lg py-2 hover:text-[#159b8a] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  href="/qui-sommes-nous" 
                  className="block text-[#222] font-semibold text-lg py-2 hover:text-[#159b8a] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  L&apos;Entreprise
                </Link>
              </li>
              <li>
                <Link 
                  href="/famille-produits" 
                  className="block text-[#222] font-semibold text-lg py-2 hover:text-[#159b8a] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Univers Produit
                </Link>
              </li>
              <li>
                <Link 
                  href="/recrutement" 
                  className="block text-[#222] font-semibold text-lg py-2 hover:text-[#159b8a] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block text-[#222] font-semibold text-lg py-2 hover:text-[#159b8a] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-4">
                <Link href="/contact" className="block w-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg hover:shadow-lg hover:shadow-[#38bdf8]/60" onClick={() => setIsMobileMenuOpen(false)}>
                  Obtenir un devis
                </Link>
              </li>
            </ul>
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