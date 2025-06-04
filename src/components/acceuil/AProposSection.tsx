import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChartBar, HiOutlineClock, HiOutlineGlobe } from 'react-icons/hi';



const AProposSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Tentative de lecture au montage pour garantir l'autoplay
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch((err) => {
          // Certains navigateurs bloquent encore : on réessaie après une légère attente
          setTimeout(() => {
            video.play().catch(() => {});
          }, 100);
        });
      }
    }
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/video/video-bienvenue.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        <div className="absolute inset-0"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-2xl tracking-tight">
            À Propos de Distritherm Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] mx-auto mb-6 rounded-full shadow-lg"></div>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch justify-center">
       
          
          {/* CARTE MISSION/ENGAGEMENTS */}
          <div className="w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col justify-between animate-slide-in-right border border-white/20 h-full">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-xl mb-4">Notre mission</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed drop-shadow-lg">
                Chez Distritherm Services, nous nous engageons à fournir des solutions complètes et innovantes pour tous vos projets de rénovation énergétique. Notre expertise nous permet de vous proposer les meilleurs produits du marché, adaptés à vos besoins spécifiques.
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur rounded-2xl shadow-lg p-7 mb-8 animate-fade-in animate-delay-200 border border-white/30">
              <h4 className="text-xl font-bold text-black drop-shadow-lg mb-4">Nos engagements</h4>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2"><span className="text-black font-bold mt-1 drop-shadow">✓</span> <span className="text-black/90 drop-shadow">Sélection rigoureuse des meilleurs produits du marché</span></li>
                <li className="flex items-start gap-2"><span className="text-black font-bold mt-1 drop-shadow">✓</span> <span className="text-black/90 drop-shadow">Conseils personnalisés par des experts du secteur</span></li>
                <li className="flex items-start gap-2"><span className="text-black font-bold mt-1 drop-shadow">✓</span> <span className="text-black/90 drop-shadow">Service de livraison rapide et efficace</span></li>
                <li className="flex items-start gap-2"><span className="text-black font-bold mt-1 drop-shadow">✓</span> <span className="text-black/90 drop-shadow">Suivi et accompagnement tout au long de vos projets</span></li>
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