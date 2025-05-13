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
    description: "Des solutions professionnelles pour tous vos projets de construction et rénovation.",
    cta: { text: "Découvrir la gamme", link: "/produits" }
  },
  {
    id: 2,
    image: "/slider4.png",
    alt: "Isolation performante",
    title: "Isolation & Performance",
    description: "Optimisez l'efficacité énergétique de vos bâtiments avec nos produits innovants.",
    cta: { text: "Voir nos solutions", link: "/isolation" }
  },
  {
    id: 3,
    image: "/slider3.jpg",
    alt: "Livraison rapide",
    title: "Livraison Express sur Chantier",
    description: "Un service fiable et rapide pour tous vos besoins professionnels.",
    cta: { text: "Nos services", link: "/services" }
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
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden rounded-3xl shadow-xl mb-4 bg-transparent">
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
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
            {/* Contenu centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-xl animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-white/90 text-lg md:text-2xl mb-8 max-w-2xl animate-fade-in delay-100">
                {slide.description}
              </p>
              <Link
                href={slide.cta.link}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-2xl transition-all animate-fade-in delay-200 text-lg md:text-xl gap-2"
              >
                {slide.cta.text}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
        {/* Flèches de navigation modernes */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full shadow-xl backdrop-blur z-20 transition-all hover:scale-110 border border-white/30"
          aria-label="Précédent"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full shadow-xl backdrop-blur z-20 transition-all hover:scale-110 border border-white/30"
          aria-label="Suivant"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
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

