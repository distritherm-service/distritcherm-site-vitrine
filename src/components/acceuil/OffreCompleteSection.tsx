import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaTruck, FaTools, FaPhoneAlt, FaClipboardList, FaCheck, FaUserTie, FaSolarPanel, FaLeaf, FaRobot, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const produits = [
  {
    nom: 'Plâtrerie',
    image: '/platerie-image.png',
    description: "Plaques de plâtre, rails, montants, enduits, bandes à joint et accessoires.",
    lien: '/gamme/platerie',
  },
  {
    nom: 'Isolation',
    image: '/isolation-image.png',
    description: "Laine de verre, laine de roche, polystyrène, panneaux isolants toitures/façades.",
    lien: '/gamme/isolation',
  },
  {
    nom: 'Chauffage',
    image: '/chauffage-image.png',
    description: "Pompes à chaleur, chaudières, géothermie, poêles, équipements de chauffage.",
    lien: '/gamme/chauffage',
  },
  {
    nom: 'Climatisation',
    image: '/climatisation-image.png',
    description: "Systèmes de climatisation, modèles mobiles et installations centralisées.",
    lien: '/gamme/climatisation',
  },
  {
    nom: 'Plomberie',
    image: '/plomberie-image.png',
    description: "Tuyaux, raccords, robinets, éviers, lavabos, douches, WC, meubles sur mesure...",
    lien: '/gamme/plomberie',
  },
  {
    nom: 'Sanitaire',
    image: '/sanitaire-image2.png',
    description: "Tout pour des installations sanitaires complètes, durables et esthétiques.",
    lien: '/gamme/sanitaire',
  },
  {
    nom: 'Électricité',
    image: '/electricite-image.png',
    description: "Câbles, interrupteurs, disjoncteurs, prises, accessoires électriques.",
    lien: '/gamme/electricite',
  },
  {
    nom: 'Outillage',
    image: '/outillage-image.png',
    description: "Perceuses, visseuses, scies, niveaux laser, échafaudages, outillage spécialisé.",
    lien: '/gamme/outillage',
  },
  {
    nom: 'EPI',
    image: '/epi-image.png',
    description: "Casques, chaussures de sécurité, gants, lunettes, masques, vêtements de travail.",
    lien: '/gamme/epi',
  },
];

const OffreCompleteSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-whiteimage.png ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
            Innovation & <span className="text-blue-600">Expertise</span>
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          Découvrez comment nous révolutionnons le secteur du bâtiment avec des solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Innovation 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaSolarPanel className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">Énergies Renouvelables</h3>
              <p className="text-gray-600">
                Solutions photovoltaïques et pompes à chaleur pour une transition énergétique efficace
              </p>
            </div>
          </div>

          {/* Innovation 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaLeaf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">Éco-construction</h3>
              <p className="text-gray-600">
                Matériaux écologiques et techniques de construction durables pour vos projets
              </p>
            </div>
          </div>

          {/* Innovation 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <FaRobot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">Support technique disponible 24/7</h3>
              <p className="text-gray-600">
                Une équipe d'experts à votre écoute 24h/24 et 7j/7 pour répondre à vos besoins
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default OffreCompleteSection; 