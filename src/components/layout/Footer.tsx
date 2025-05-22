import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-700 py-12 overflow-hidden">
      {/* Fond diagonal */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gray-100"></div>
        <div 
          className="absolute top-0 right-0 w-[75%] h-full bg-[#0099cc]" 
          style={{ 
            clipPath: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)',
            transform: 'translateX(50px)'
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-[70%] h-full bg-[#001e3c]" 
          style={{ 
            clipPath: 'polygon(200px 0, 100% 0, 100% 100%, 100px 100%)',
            transform: 'translateX(50px)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo et réseaux sociaux */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <Image 
                src="/logods.png" 
                alt="Distritherm Services" 
                width={200} 
                height={80} 
                className="h-auto"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg mb-4">Suivez-nous sur :</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-400">
                  <FaTwitter size={20} />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-800">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Nous contacter */}
          <div className="text-[#001e3c] md:text-white md:pl-20 pl-10">
            <h3 className="font-bold text-xl mb-4">Nous Contacter</h3>
            <div className="space-y-2">
              <p className="font-semibold">Siège social & Magasin Taverny</p>
              <p>16 Rue du condrocel 95000 Taverny</p>
             
              <p className="font-semibold">Magasin Drancy</p>
              <p>151 rue Diderot 93700 Drancy</p>
              <p className="font-semibold">Numéro Téléphone</p>
              <p><a href="">01 71 68 72 12 </a></p>
            </div>
          </div>
          
          {/* Catégories de produits */}
          <div className="text-[#001e3c] md:text-white md:pl-14">
            <h3 className="font-bold text-xl mb-4">Nos Catégories</h3>
            <ul className="space-y-2">
            
              <li>
                <Link href="/gamme/platerie" className="hover:text-blue-200">
                  Platerie
                </Link>
              </li>
              <li>
                <Link href="/gamme/plomberie" className="hover:text-blue-200">
                  Plomberie
                </Link>
              </li>
              <li>
                <Link href="/gamme/chauffage" className="hover:text-blue-200">
                  Chauffage
                </Link>
              </li>
              <li>
                <Link href="/gamme/climatisation" className="hover:text-blue-200">
                  Climatisation
                </Link>
              </li>
              <li>
                <Link href="/gamme/isolation" className="hover:text-blue-200">
                  Isolation
                </Link>
              </li>
              <li>
                <Link href="/gamme/electricite" className="hover:text-blue-200">
                  Électricité
                </Link>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Télécharger notre application</h3>
              <div className="flex space-x-3">
                <Link href="https://play.google.com" className="block">
                  <div className="bg-black text-white rounded px-4 py-2 text-xs flex items-center">
                    <span>Google Play</span>
                  </div>
                </Link>
                <Link href="https://apps.apple.com" className="block">
                  <div className="bg-black text-white rounded px-4 py-2 text-xs flex items-center">
                    <span>App Store</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Informations */}
          <div className="text-[#001e3c] md:text-white md:pl-10">
            <h3 className="font-bold text-xl mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="hover:text-blue-200">
                  À propos de Distritherm Service
                </Link>
              </li>
              <li>
                <Link href="/connexion" className="hover:text-blue-200">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-blue-200">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="hover:text-blue-200">
                  Conditions générales d'utilisation du site
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className=" mt-8 pt-6 text-center text-[#001e3c] md:text-white">
          <p>&copy; {new Date().getFullYear()} Distritherm Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 