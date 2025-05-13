'use client';

import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';
import { HiOutlineUsers, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi';

const valeurs = [
  {
    icon: <HiOutlineUsers className="w-8 h-8 text-blue-600" />,
    title: 'Proximité client',
    description: "Nous plaçons la satisfaction et l'écoute de nos clients au centre de nos préoccupations."
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-blue-600" />,
    title: 'Expertise',
    description: "Notre équipe d'experts qualifiés vous garantit des conseils professionnels et pertinents."
  },
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Qualité',
    description: "Nous sélectionnons rigoureusement nos produits pour vous offrir le meilleur rapport qualité-prix."
  },
  {
    icon: <HiOutlineLightningBolt className="w-8 h-8 text-blue-600" />,
    title: 'Réactivité',
    description: "Notre service de livraison rapide vous permet de disposer de vos produits dans les meilleurs délais."
  }
];

const agences = [
  {
    nom: 'Taverny',
    adresse: '16 rue Condorcet, 95150 Taverny',
    tel: '01 23 45 67 89',
    email: 'taverny@distritherm.fr',
    map: 'https://www.google.com/maps/d/u/1/edit?mid=1n5l9-CbHVQS08W74uJ-dC0BqRe_gVlg&usp=sharing',
    image: '/image2.png',
  },
  {
    nom: 'Drancy',
    adresse: '23 rue des Bois, 93700 Drancy',
    tel: '01 23 45 67 90',
    email: 'drancy@distritherm.fr',
    map: 'https://www.google.com/maps/d/u/1/edit?mid=1sdZwh0fLh2hJshyVrQqJMnbzvHto2sM&usp=sharing',
    image: '/image2.png',
  },
];

const partenaires = [
  { src: '/fournisseurs/fhe_logo.webp', alt: 'FHE' },
  { src: '/fournisseurs/dewalt_logo.jpg', alt: 'Dewalt' },
  { src: '/fournisseurs/clivet_logo19.png', alt: 'Clivet' },
  { src: '/fournisseurs/logo_multitubo.jpg', alt: 'Multitubo' },
  { src: '/fournisseurs/logo_ursa_hd.jpg', alt: 'Ursa' },
  { src: '/fournisseurs/logo_teddington_1934_cmjn_vecto_bd.jpg', alt: 'Teddington' },
  { src: '/fournisseurs/logo_stanley_utilisation_digitale.jpg', alt: 'Stanley' },
  { src: '/fournisseurs/makita_logo.png', alt: 'Makita' },
  { src: '/fournisseurs/r.png', alt: 'R' },
  { src: '/fournisseurs/watts_logo_dernier.jpg', alt: 'Watts' },
  { src: '/fournisseurs/rockwool_logo_primary_colour_rgb.png', alt: 'Rockwool' },
];

const QuiSommesNousPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-[#7CB9E8]/30">
      {/* Fond décoratif */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.2] pointer-events-none" /> */}
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      {/* Breadcrumb */}
      <div className="relative z-10">
        <Breadcrumb />
      </div>
      <main className="flex-grow relative z-10">
        {/* En-tête */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                  Qui sommes-nous ?
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                Découvrez notre histoire, nos valeurs et notre engagement envers nos clients et partenaires.
              </p>
            </div>
            {/* Présentation */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mb-16">
              {/* Bloc texte */}
              <div className="flex-1 w-full animate-fade-in md:animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="inline-block">Découvrez, l'expert rénovation énergétique</span>
                </h2>
                <p className="text-gray-700 text-base">
                Bienvenue chez Distritherm Services, installé à Taverny (95), vous serez accueilli au sein d'un magasin par une équipe compétente et professionnelle, à votre écoute et à votre disponibilité pour répondre à l'ensemble de vos besoins en matériels ou en conseils.<br />
                    Nous connaissons vos attentes : rapidité, disponibilité et économie.<br />
                    Au service des professionnels, nous misons sur la proximité, l'efficacité, et le professionnalisme pour vous accompagner au quotidien sur vos chantiers et projets de construction et de rénovation.
                </p>
              </div>
              </div>
              {/* Image animée */}
              <div className="flex-1 flex justify-center w-full animate-fade-in md:animate-slide-in-left">
                <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100 group transition-all duration-500">
                  <Image 
                    src="/image2.png" 
                    alt="Distritherm" 
                    fill 
                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 400px" 
                    priority 
                  />
                  {/* Halo animé */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl group-hover:ring-4 group-hover:ring-blue-200 transition-all duration-500" />
                </div>
              </div> 
            </div>
            {/* Histoire & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="inline-block">Notre Histoire</span>
                </h2>
                <p className="text-gray-700 text-base">
                  DISTRITHERM SERVICES est une entreprise spécialisée dans la distribution de matériaux et équipements pour l'amélioration et le confort de l'habitat. Fondée en 2022, l'entreprise propose une vaste gamme de plus de 10 000 références produits, couvrant des domaines tels que la plâtrerie, l'isolation, les pompes à chaleur, et bien d'autres. Avec deux entrepôts situés à Taverny et Drancy, DISTRITHERM SERVICES s'engage à fournir des produits de qualité et un service client exceptionnel, notamment grâce à une disponibilité constante des produits et des livraisons rapides dans toute l'Île-de-France et au-delà.<br /><br />
                  Aujourd'hui, avec nos deux points de vente à Taverny et Drancy, nous sommes fiers de servir une clientèle professionnelle et particulière dans toute l'Île-de-France, proposant une large gamme de produits et services dans le domaine du bâtiment.<br /><br />
                  Notre mission reste inchangée : fournir des produits de qualité supérieure, offrir un service client exemplaire et contribuer à la réussite de vos projets.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="inline-block">Notre Vision</span>
                </h2>
                <p className="text-gray-700 text-base mb-4">
                  Distritherm Service aspire à devenir le distributeur de référence en matériaux et solutions pour les professionnels du bâtiment en Île-de-France.<br /><br />
                  Nous nous engageons à accompagner la transition énergétique en proposant des solutions innovantes et écologiques, tout en maintenant notre engagement envers l'excellence du service client et la qualité des produits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div>
                    <span className="font-semibold text-blue-600">Qualité garantie</span>
                    <p className="text-sm text-gray-600">Nous sélectionnons avec soin les meilleurs produits du marché</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Livraison rapide</span>
                    <p className="text-sm text-gray-600">Nous assurons une livraison efficace sur tous vos chantiers</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Solutions durables</span>
                    <p className="text-sm text-gray-600">Nous favorisons les produits respectueux de l'environnement</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Conseils d'experts</span>
                    <p className="text-sm text-gray-600">Notre équipe de professionnels vous guide dans vos choix</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Prix compétitifs</span>
                    <p className="text-sm text-gray-600">Nous négocions les meilleurs tarifs pour nos clients</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Service après-vente</span>
                    <p className="text-sm text-gray-600">Notre support client reste à votre écoute après l'achat</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Valeurs */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {valeurs.map((valeur, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 shadow-md">
                      {valeur.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{valeur.title}</h3>
                    <p className="text-gray-600 text-sm leading-snug">{valeur.description}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Agences */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nos Magasins</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {agences.map((agence, idx) => (
                  <div key={agence.nom} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center p-6 gap-6">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="relative w-40 h-32 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                        <Image src={agence.image} alt={agence.nom} fill className="object-cover" sizes="160px" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">{agence.nom}</h3>
                      <div className="mb-2">
                        <span className="font-semibold">Adresse :</span> {agence.adresse}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Téléphone :</span> {agence.tel}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Email :</span> {agence.email}
                      </div>
                      <a href={agence.map} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Voir sur la carte</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/d/u/1/embed?mid=1tpn6GOXi0kycdEFSlFyv95Jy_X-lUgY"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Distritherm"
                ></iframe>
              </div>
            </section>
            {/* Partenaires */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nos Partenaires</h2>
              <div className="relative overflow-x-hidden w-full">
                <div className="flex items-center gap-12 animate-marquee whitespace-nowrap min-w-max py-2">
                  {partenaires.concat(partenaires).map((partenaire, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex items-center justify-center h-24 w-48 border border-gray-100 mx-2">
                      <img src={partenaire.src} alt={partenaire.alt} className="h-20 w-auto object-contain block" />
                    </div>
                  ))}
                </div>
                <style jsx>{`
                  @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee {
                    animation: marquee 30s linear infinite;
                  }
                `}</style>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNousPage; 