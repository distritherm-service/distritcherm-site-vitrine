import React from 'react';
import { FaRulerCombined, FaBoxOpen, FaTruckFast, FaLock, FaEnvelope } from 'react-icons/fa6';
import { FaShoppingCart, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';

const features = [
  {
    icon: <FaRulerCombined className="w-10 h-10 text-[#007FFF]" />,
    title: 'Étude et dimensionnement de vos projets',
  },
  {
    icon: <FaBoxOpen className="w-10 h-10 text-[#007FFF]" />,
    title: 'Produits en stock disponibilité immédiate',
  },
  {
    icon: <FaShoppingCart className="w-10 h-10 text-[#007FFF]" />,
    title: 'E-commerce commandez vos produits en ligne',
  },
  {
    icon: <FaShieldAlt className="w-10 h-10 text-[#007FFF]" />,
    title: 'Garantie et services assurés',
  },
  {
    icon: <FaTruckFast className="w-10 h-10 text-[#007FFF]" />,
    title: 'Livraison rapide sous 24 ou 72h',
  },
  {
    icon: <FaLock className="w-10 h-10 text-[#007FFF]" />,
    title: 'Paiement sécurisé',
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#7CB9E8]/20 pointer-events-none">
        {/* <svg className="absolute inset-0 w-full h-full opacity-10" style={{zIndex:0}} xmlns="http://www.w3.org/2000/svg" fill="none"><defs><pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#007FFF" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg> */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
              Notre valeur ajoutée
            </span>
            <span className="block h-1 w-32 mx-auto mt-3 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full animate-pulse" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Découvrez nos services exclusifs conçus pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/60 shadow-xl flex items-center justify-center mb-5 border border-blue-100 backdrop-blur-md group-hover:scale-110 group-hover:shadow-blue-200 group-hover:border-blue-300 transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#eaf6ff] to-[#e3f0fa] opacity-80 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#7CB9E8]/30 to-[#007FFF]/10 shadow group-hover:shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-[#007FFF] transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Section Newsletter */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 relative overflow-hidden border border-blue-100">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 pointer-events-none" />
            <div className="relative">
              <div className="flex flex-col items-center text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Abonnez-vous à notre newsletter</h3>
              </div>
              <form className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-auto flex-1">
                  <input
                    type="email"
                    placeholder="Votre adresse e-mail svp..."
                    className="pl-6 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-base"
                >
                  <FaPaperPlane className="w-5 h-5" /> S'ABONNER
                </button>
              </form>
              <p className="mt-6 text-xs text-gray-500 leading-relaxed text-center">
                En soumettant ce formulaire, j'accepte que les données renseignées soient utilisées par Distritherm Services pour permettre de me recontacter, dans le cadre de ma demande. Je reconnais également que les données collectées seront utilisées pour la gestion de la relation commerciale (conformément au RGPD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 