"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ValeursSection from "./ValeursSection";

const slides = [
  {
    id: 1,
    image: "/slider2.png",
    alt: "Matériaux de construction",
    title: "Matériaux haut de gamme",
    description: "Des solutions professionnelles pour tous vos projets de construction en neuf et rénovation.",
    cta: { text: "Nous connaitre", link: "/qui-sommes-nous" }
  },
  {
    id: 2,
    image: "/slider4.png",
    alt: "Isolation performante",
    title: "Isolation & Performance",
    description: "Optimisez l'efficacité énergétique de vos bâtiments avec nos produits innovants.",
    cta: { text: "Decouvrir notre gamme", link: "/gamme" }
  },
  {
    id: 3,
    image: "/slider3.png",
    alt: "Livraison rapide",
    title: "Livraison Express sur Chantier",
    description: "Un service fiable et rapide pour tous vos besoins professionnels.",
    cta: { text: "Nos services", link: "/famille-produits" }
  }
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goToSlide = (idx: number) => setCurrent(idx);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      <section className="relative w-full h-[85vh] xs:h-[75vh] sm:h-[70vh] md:h-[65vh] lg:h-[60vh] min-h-[350px] overflow-hidden rounded-xl sm:rounded-3xl shadow-xl mb-4 bg-transparent">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"}`}
          >
            {/* Image de fond avec effet de zoom (ken burns) */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className={`object-cover object-center transition-transform duration-[4000ms] ${idx === current ? "scale-110" : "scale-100"}`}
              priority={idx === 0}
            />
            {/* Overlay dégradé doux */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent" />
            {/* Contenu centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 z-20">
              <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%]">
                <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 xs:mb-3 sm:mb-4 drop-shadow-xl animate-fade-in leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 xs:mb-6 sm:mb-8 animate-fade-in delay-100 leading-relaxed">
                  {slide.description}
                </p>
                <Link
                  href={slide.cta.link}
                  className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-2xl transition-all animate-fade-in delay-200 text-sm xs:text-base sm:text-lg md:text-xl gap-1 xs:gap-2"
                >
                  {slide.cta.text}
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Flèches de navigation modernes */}
        <button
          onClick={prevSlide}
          className="absolute left-2 xs:left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 xs:p-3 sm:p-4 rounded-full shadow-xl backdrop-blur z-20 transition-all hover:scale-110 border border-white/30"
          aria-label="Précédent"
        >
          <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 xs:right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 xs:p-3 sm:p-4 rounded-full shadow-xl backdrop-blur z-20 transition-all hover:scale-110 border border-white/30"
          aria-label="Suivant"
        >
          <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                idx === current 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      <ValeursSection />
    </>
  );
}

// Ajoute dans ton CSS global :
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in {
//   animation: fade-in 0.9s cubic-bezier(.4,0,.2,1) both;
// }
// .animate-fade-in.delay-100 { animation-delay: 0.1s; }
// .animate-fade-in.delay-200 { animation-delay: 0.2s; }

