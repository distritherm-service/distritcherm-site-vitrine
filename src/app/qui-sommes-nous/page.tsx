'use client';

import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaUsers, FaHistory, FaTruck, FaEye, FaAward, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackButton from '@/components/BackButton';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PartnersCarousel from '@/components/acceuil/PartnersCarousel';

const QuiSommesNous: React.FC = () => {
  const logosContainerRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const scrollLogos = (direction: 'left' | 'right') => {
    const container = logosContainerRef.current;
    if (!container) return;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const magasins = [
    { 
      id: 'taverny', 
      name: 'Taverny', 
      address: '16 rue Condorcet, 95150 Taverny',
      tel: '01 71 68 72 12',
      email: 'info@distritherm-services.fr',
      image: '/image-propos.jpg',
      mapUrl: "https://www.google.com/maps/place/Distritherm+Services/@49.028085,2.1898189,17z/data=!3m1!4b1!4m6!3m5!1s0x47e65f83bd01199d:0x6c3662d8abbc2b5b!8m2!3d49.028085!4d2.1898189!16s%2Fg%2F11k4qzz8tm?entry=ttu"
    },
    { 
      id: 'drancy', 
      name: 'Drancy', 
      address: '151 rue Diderot, 93700 Drancy',
      tel: '01 71 68 72 12',
      email: 'info@distritherm-services.fr',
      image: '/image-ds.png',
      mapUrl: "https://www.google.com/maps?q=151+Rue+Diderot,+93700+Drancy&ftid=0x47e66c92695024a9:0xa36405cf30ef2e2f"
    },
  ];

  const valeurs = [
    { 
      icon: <FaUsers />, 
      title: "Proximité client", 
      description: "Nous plaçons la satisfaction et l'écoute de nos clients au centre de nos préoccupations." 
    },
    { 
      icon: <FaAward />, 
      title: "Expertise", 
      description: "Notre équipe d'experts qualifiés vous garantit des conseils professionnels et pertinents." 
    },
    { 
      icon: <FaThumbsUp />, 
      title: "Qualité", 
      description: "Nous sélectionnons rigoureusement nos produits pour vous offrir le meilleur rapport qualité-prix." 
    },
    { 
      icon: <FaTruck />, 
      title: "Réactivité", 
      description: "Notre service de livraison rapide vous permet de disposer de vos produits dans les meilleurs délais." 
    }
  ];

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(breadcrumbRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
        })
        .from(paragraphRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
        }, '-=0.6');
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="relative min-h-screen bg-[#EEF7FF]">
        {/* Hero compact */}
        <section className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden shadow-md">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src="/image-propos.jpg"
              alt="À propos de Distritherm Service"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Voile sombre en dégradé pour accentuer la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">Qui Sommes Nous</h1>
            <br />
            <Breadcrumb />
          </div>
          <div className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2">
            <svg viewBox="0 0 1600 100" className="w-full h-6 md:h-8" preserveAspectRatio="none">
              <path d="M0,0 C600,100 1000,100 1600,0 L1600,100 L0,100 Z" fill="#EEF7FF" />
            </svg>
          </div>
        </section>

        {/* Contenu principal */}
        <div className="relative">
          <div className="relative pt-12 ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 inline-block relative">
                  <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                    Distritherm Services
                  </span>
                  <span className="block absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full" />
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto" ref={paragraphRef}>
                  Découvrez notre histoire, nos valeurs et notre engagement envers nos clients et partenaires
                </p>
              </div>
            </div>
          </div>

          <section className="relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8  transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <FaHistory className="text-3xl text-[#007FFF] mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Notre Histoire</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                  DISTRITHERM SERVICES est une entreprise spécialisée dans la distribution de matériaux et équipements pour l'amélioration et le confort de l'habitat. Fondée en 2022, l'entreprise propose une vaste gamme de plus de 10 000 références produits, couvrant des domaines tels que la plâtrerie, l'isolation, les pompes à chaleur, et bien d'autres. Avec deux entrepôts situés à Taverny et Drancy, DISTRITHERM SERVICES s'engage à fournir des produits de qualité et un service client exceptionnel, notamment grâce à une disponibilité constante des produits et des livraisons rapides dans toute l'Île-de-France et au-delà.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Aujourd'hui, avec nos deux points de vente à Taverny et Drancy, nous sommes fiers de servir une clientèle professionnelle et particulière dans toute l'Île-de-France, proposant une large gamme de produits et services dans le domaine du bâtiment.
                  </p>
                  <p className="text-gray-600">
                    Notre mission reste inchangée : fournir des produits de qualité supérieure, offrir un service client exemplaire et contribuer à la réussite de vos projets.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[450px]">
                  <Image 
                    src="/image-ds.png" 
                    alt="L'histoire de Distritherm"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold">Négoce en matériaux indépendant</h3>
                      <p className="text-white/90">Spécialisé dans plusieurs domaines d'activités</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />

          <section className="relative py-16 bg-gradient-to-r from-[#0000FF]/5 to-[#007FFF]/5">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="relative inline-block">
                    Nos Valeurs
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Les principes qui guident nos actions au quotidien
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {valeurs.map((valeur, index) => (
                  <div 
                    key={index} 
                    className={`${
                      valeur.title === 'Proximité client'
                        ? 'bg-gradient-to-r from-[#FFE5B4] via-[#FFD3A5] to-[#FFBC8B] text-gray-800 shadow-lg relative overflow-hidden'
                        : valeur.title === 'Expertise'
                        ? 'bg-gradient-to-r from-[#D1F7C4] via-[#B6F3E6] to-[#C0F2F1] text-gray-800 shadow-lg relative overflow-hidden'
                        : valeur.title === 'Qualité'
                        ? 'bg-gradient-to-r from-[#8EC5FC] via-[#c2d9fe] to-[#E0C3FC] text-gray-800 shadow-lg relative overflow-hidden'
                        : valeur.title === 'Réactivité'
                        ? 'bg-gradient-to-r from-[#FFD6E0] via-[#FDC5D0] to-[#F6B4C2] text-gray-800 shadow-lg relative overflow-hidden'
                        : 'bg-white text-gray-800 shadow-md'
                    } rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[300px] flex flex-col`}
                  >
                    {valeur.title === 'Proximité client' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <FaUsers className="text-8xl text-gray-500/20" />
                      </div>
                    )}
                    {valeur.title === 'Expertise' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <FaAward className="text-8xl text-gray-500/20" />
                      </div>
                    )}
                    {valeur.title === 'Qualité' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <FaThumbsUp className="text-8xl text-gray-500/20" />
                      </div>
                    )}
                    {valeur.title === 'Réactivité' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <FaTruck className="text-8xl text-gray-500/20" />
                      </div>
                    )}
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-3xl rounded-full bg-white/40 backdrop-blur-sm border-2 border-white/50 text-[#159b8a] relative z-10">
                      {valeur.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 relative z-10 text-gray-800">
                      {valeur.title}
                    </h3>
                    <p className="relative z-10 text-gray-700">
                      {valeur.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="relative inline-block">
                    Nos Magasins
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Retrouvez-nous dans nos points de vente en Île-de-France
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {magasins.map((magasin) => (
                  <div 
                    key={magasin.id} 
                    className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <Image 
                        src={magasin.image} 
                        alt={`Magasin de ${magasin.name}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-white text-2xl font-bold">{magasin.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start space-x-3 mb-3">
                        <FaMapMarkerAlt className="flex-shrink-0 w-5 h-5 text-[#1E90FF] mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-900">Adresse</h4>
                          <p className="text-gray-600">{magasin.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-[#1E90FF] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-900">Téléphone</h4>
                          <p className="text-gray-600">{magasin.tel}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-[#1E90FF] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-900">Email</h4>
                          <p className="text-gray-600">{magasin.email}</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <a 
                          href={magasin.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] hover:from-[#0000CC] hover:to-[#0470dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E90FF] transition-colors duration-300"
                        >
                          <FaMapMarkerAlt className="mr-2" />
                          Voir sur la carte
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div id="map-section" className="mt-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 overflow-hidden">
                <div className="rounded-xl overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.080024053888!2d2.1898189!3d49.028085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65f83bd01199d%3A0x6c3662d8abbc2b5b!2sDistritherm%20Services!5e0!3m2!1sfr!2sfr!4v1748857463351!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-16 bg-gradient-to-r from-[#0000FF]/5 to-[#1E90FF]/5">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <FaEye className="text-3xl text-[#1E90FF] mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Notre Vision</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Distritherm Services aspire à devenir le distributeur de référence en matériaux et solutions destinés aux professionnels du bâtiment en Île-de-France.
                  </p>
                  <p className="text-gray-600">
                  Nous sommes déterminés à soutenir la transition énergétique en offrant des solutions avant-gardistes et respectueuses de l'environnement, tout en préservant notre dévouement pour l'excellence du service à la clientèle et à la qualité de nos produits.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-2">Nos Valeurs</h3>
                    <p className="text-gray-600 mb-8">Nous sommes guidés par des valeurs fondamentales qui définissent qui nous sommes en tant qu'entreprise :</p>
                    <div className="relative flex flex-col gap-12">
                      {/* Timeline verticale parfaitement reliée */}
                      <div className="absolute left-3 top-0 h-[calc(100%-60px)] w-0.5 bg-[#00CFFF] z-0"></div>
                      {/* Qualité */}
                      <div className="flex items-start relative z-10">
                        <div className="flex flex-col items-center mr-8">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#00CFFF]"></div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-1">Qualité</h4>
                          <p className="text-gray-700 text-base">Nous nous engageons à fournir des produits et des services de la plus haute qualité à nos clients.</p>
                        </div>
                      </div>
                      {/* Intégrité */}
                      <div className="flex items-start relative z-10">
                        <div className="flex flex-col items-center mr-8">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#00CFFF]"></div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-1">Intégrité</h4>
                          <p className="text-gray-700 text-base">Nous agissons toujours avec intégrité, honnêteté et transparence dans toutes nos interactions.</p>
                        </div>
                      </div>
                      {/* Innovation */}
                      <div className="flex items-start relative z-10">
                        <div className="flex flex-col items-center mr-8">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#00CFFF]"></div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-1">Innovation</h4>
                          <p className="text-gray-700 text-base">Nous cherchons continuellement à innover et à trouver de nouvelles solutions pour répondre aux besoins changeants de nos clients.</p>
                        </div>
                      </div>
                      {/* Responsabilité */}
                      <div className="flex items-start relative z-10">
                        <div className="flex flex-col items-center mr-8">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#00CFFF]"></div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 mb-1">Responsabilité</h4>
                          <p className="text-gray-700 text-base">Nous sommes responsables de nos actions et de leur impact sur notre communauté et notre environnement.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

                {/* nos partenaire */}
                <PartnersCarousel />
                
                {/* section service de livraison  */}
          <section id="service-livraison" className="relative py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="relative inline-block">
                    Notre service de <span className="font-bold text-[#1E90FF]">livraison</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Fiabilité et réactivité au service de vos chantiers
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] order-2 lg:order-1">
                  <Image 
                    src="/camion-livraison.png" 
                    alt="Camion de livraison DISTRITHERM Services" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Livraison sur mesure</h3>
                  <p className="text-gray-600 mb-4">
                    Nous livrons en direct sur chantier, à votre dépôt ou proposons le retrait à notre magasin. Vos commandes sont soigneusement préparées par notre équipe logistique.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Notre service est organisé de manière à vous garantir des délais de livraison courts et un accueil en magasin de 6h30 à 17h pour le retrait de vos commandes ou pour accéder à notre espace libre-service.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 mt-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB9E8]/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E90FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Livraison rapide</h4>
                        <p className="text-gray-600 text-sm">Délais optimisés</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB9E8]/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E90FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Sécurité garantie</h4>
                        <p className="text-gray-600 text-sm">Emballage soigné</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB9E8]/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E90FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V7a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414L9 13.414V8a1 1 0 011-1zM3 21h18M5 21V9a1 1 0 011-1h12a1 1 0 011 1v12M9 21v-8a1 1 0 011-1h4a1 1 0 011 1v8" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Samedi sur RDV</h4>
                        <p className="text-gray-600 text-sm">Service sur demande</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Équipement spécialisé</h3>
                  <p className="text-gray-600 mb-4">
                    Vous avez en main toutes les cartes pour livrer vos chantiers dans le respect des délais, que vous interveniez en plomberie, électricité ou tout autre type de travaux techniques dans le domaine du bâtiment.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Avec DISTRITHERM Services Taverny ou Drancy, vous avez l'assurance d'un partenaire fiable et réactif, qui comprend vos enjeux et s'engage à vos côtés pour la réussite de vos projets.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 mt-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB9E8]/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E90FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Équipe dédiée</h4>
                        <p className="text-gray-600 text-sm">Personnel qualifié</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB9E8]/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E90FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Retrait sur site</h4>
                        <p className="text-gray-600 text-sm">Ouvert de 6h30 à 17h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                  <Image 
                    src="/camion-grue.png" 
                    alt="Camion grue DISTRITHERM Services" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#318CE7]/10 to-[#1E90FF]/10 rounded-2xl p-12 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                
                <div className="relative text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                      Distritherm Services, votre partenaire de confiance
                    </span>
                  </h3>
                  <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-lg">
                    Notre large gamme de produits, notre expertise technique et notre sens du service font de nous un négoce de matériaux de référence pour les professionnels du bâtiment en région parisienne et partout en France.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                      href="/contact" 
                      className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#007FFF] text-base font-semibold rounded-xl text-white bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] hover:from-[#0000CC] hover:to-[#0470dd] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Demander un devis gratuit
                    </Link>
                    <Link 
                      href="tel:+33123456789" 
                      className="inline-flex items-center justify-center px-6 py-4 border-2 border-[#007FFF] text-base font-semibold rounded-xl text-[#007FFF] hover:text-white hover:bg-[#007FFF] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuiSommesNous; 