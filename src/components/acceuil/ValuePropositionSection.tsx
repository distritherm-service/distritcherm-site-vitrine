import React from 'react';
import { FaRulerCombined, FaBoxOpen, FaTruckFast, FaLock, FaEnvelope } from 'react-icons/fa6';
import { FaShoppingCart, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';

const features = [

  {
    icon: <FaBoxOpen className="w-10 h-10 text-[#007FFF]" />,
    title: 'Produits en stock disponibilité immédiate',
  },
  {
    icon: <FaShoppingCart className="w-10 h-10 text-[#007FFF]" />,
    title: 'E-commerce commandez vos produits en ligne',
  },
  {
    icon: <FaTruckFast className="w-10 h-10 text-[#007FFF]" />,
    title: 'Livraison rapide sous 24 ou 72h',
  },
 
];

const ValuePropositionSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-[#f0f7fa] to-[#eaf6ff]">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block tracking-tight">
            <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent drop-shadow-lg">
              Notre valeur ajoutée
            </span>
            <span className="block h-1 w-32 mx-auto mt-3 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full animate-pulse" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg font-medium">
            Découvrez nos services exclusifs conçus pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-3xl bg-white/60 shadow-2xl flex items-center justify-center mb-6 border border-blue-100 backdrop-blur-xl group-hover:scale-105 group-hover:shadow-blue-200 group-hover:border-blue-400 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#eaf6ff] to-[#e3f0fa] opacity-90 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#7CB9E8]/40 to-[#007FFF]/20 shadow group-hover:shadow-lg">
                  <span className="text-4xl bg-gradient-to-br from-[#007FFF] to-[#7CB9E8] bg-clip-text text-transparent drop-shadow-md">
                    {feature.icon}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#007FFF] transition-colors duration-300 tracking-tight">
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