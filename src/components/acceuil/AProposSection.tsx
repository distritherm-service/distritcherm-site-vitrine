import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChartBar, HiOutlineClock, HiOutlineGlobe } from 'react-icons/hi';

const pointsForts = [
  {
    icon: <HiOutlineChartBar className="w-7 h-7 text-blue-600" />,
    title: 'Expertise',
    desc: 'Des professionnels à votre service',
  },
  {
    icon: <HiOutlineClock className="w-7 h-7 text-blue-600" />,
    title: 'Réactivité',
    desc: 'Livraison rapide sur vos chantiers',
  },
  {
    icon: <HiOutlineGlobe className="w-7 h-7 text-blue-600" />,
    title: 'Proximité',
    desc: 'Présence en Île-de-France',
  },
];

const AProposSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#eaf4fb] via-white to-[#dbeafe] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] inline-block tracking-tight">
            À Propos de Distritherm Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] mx-auto mb-6 rounded-full"></div>
        </div>
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-12">
          {/* IMAGE HERO + BADGES */}
          <div className="relative w-full max-w-2xl lg:w-1/2 flex-shrink-0 animate-slide-in-left mb-20 md:mb-24 lg:mb-0">
            <div className="relative rounded-3xl overflow-visible shadow-2xl bg-white/0 h-full">
              <div className="relative h-96 md:h-[500px] lg:h-full rounded-3xl overflow-hidden z-10">
                <Image
                  src="/image2.png"
                  alt="Distritherm Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">Votre partenaire de confiance</h3>
                  <p className="text-white/90 text-base drop-shadow">Spécialiste de la distribution de matériel pour la rénovation énergétique</p>
                </div>
              </div>
              {/* BADGES POINTS FORTS */}
              {/* <div className="absolute -bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20 md:left-auto md:right-0 md:translate-x-0 md:flex-col md:gap-6">
                {pointsForts.map((pt, i) => (
                  <div
                    key={pt.title}
                    className="backdrop-blur-xl bg-white/70 border border-blue-100 shadow-xl rounded-full px-6 py-4 flex flex-col items-center min-w-[120px] max-w-[140px] transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-2xl animate-fade-in"
                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="mb-1 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 shadow">
                      {pt.icon}
                    </div>
                    <span className="font-semibold text-gray-800 text-base mb-1 text-center">{pt.title}</span>
                    <span className="text-xs text-gray-500 text-center leading-tight">{pt.desc}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          {/* CARTE GLASS MISSION/ENGAGEMENTS */}
          <div className="w-full max-w-2xl lg:w-1/2 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col justify-between animate-slide-in-right border border-blue-100 relative z-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Notre mission</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Chez Distritherm Services, nous nous engageons à fournir des solutions complètes et innovantes pour tous vos projets de rénovation énergétique. Notre expertise nous permet de vous proposer les meilleurs produits du marché, adaptés à vos besoins spécifiques.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-7 mb-8 animate-fade-in animate-delay-200 border border-blue-100">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Nos engagements</h4>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-1">✓</span> <span className="text-gray-700">Sélection rigoureuse des meilleurs produits du marché</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-1">✓</span> <span className="text-gray-700">Conseils personnalisés par des experts du secteur</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-1">✓</span> <span className="text-gray-700">Service de livraison rapide et efficace</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-1">✓</span> <span className="text-gray-700">Suivi et accompagnement tout au long de vos projets</span></li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Link 
                href="/qui-sommes-nous" 
                className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-fade-in animate-delay-300"
              >
                En savoir plus sur nous
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default AProposSection; 