'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBoxOpen, FaClock, FaLayerGroup, FaSmile } from 'react-icons/fa';

// Définition des catégories de produits
const categories = [
  {
    id: 'chauffage',
    nom: 'Chauffage',
    description: 'Solutions complètes pour le chauffage résidentiel et professionnel. Radiateurs, chaudières, pompes à chaleur et accessoires de qualité supérieure.',
    image: '/chauffage-image.png',
    link: 'gamme/chauffage',
    produits: [
      'Radiateurs électriques',
      'Chaudières gaz condensation',
      'Pompes à chaleur air-eau',
      'Systèmes de chauffage au sol',
      'Thermostats intelligents'
    ],
    bgColor: 'from-red-50 to-orange-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-200',
    hoverColor: 'group-hover:bg-red-600',
  },
  {
    id: 'plomberie',
    nom: 'Plomberie',
    description: 'Articles de plomberie professionnels pour tous vos projets d\'installation et de rénovation. Tuyauterie, raccords et outils spécialisés.',
    image: '/plomberie-image.png',
    link: 'gamme/plomberie',
    produits: [
      'Tubes multicouches',
      'Raccords laiton',
      'Vannes et robinetterie',
      'Cuivre et PER',
      'Évacuations PVC'
    ],
    bgColor: 'from-blue-50 to-cyan-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    hoverColor: 'group-hover:bg-blue-600'
  },
  {
    id: 'climatisation',
    nom: 'Climatisation',
    description: 'Équipements de climatisation pour un confort optimal en toutes saisons. Solutions écoénergétiques pour particuliers et professionnels.',
    image: '/climatisation-image.png',
    link: 'gamme/climatisation',
    produits: [
      'Climatiseurs split',
      'Climatiseurs multi-split',
      'Gainables',
      'Cassettes plafonnières',
      'Accessoires et filtres'
    ],
    bgColor: 'from-cyan-50 to-sky-50',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200',
    hoverColor: 'group-hover:bg-cyan-600'
  },
  {
    id: 'isolation',
    nom: 'Isolation',
    description: 'Matériaux isolants haute performance pour l\'efficacité énergétique de votre habitation. Solutions thermiques et acoustiques.',
    image: '/isolation-image.png',
    link: 'gamme/isolation',
    produits: [
      'Laine de verre',
      'Laine de roche',
      'Panneaux isolants',
      'Isolation thermique par l\'extérieur',
      'Isolation pour combles'
    ],
    bgColor: 'from-green-50 to-emerald-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
    hoverColor: 'group-hover:bg-green-600'
  },
  {
    id: 'electricite',
    nom: 'Électricité',
    description: 'Produits électriques pour installations résidentielles et industrielles. Câblage, tableaux électriques et équipements de protection.',
    image: '/electricite-image.png',
    link: 'gamme/electricite',
    produits: [
      'Câbles électriques',
      'Tableaux et disjoncteurs',
      'Prises et interrupteurs',
      'Éclairage LED',
      'Domotique'
    ],
    bgColor: 'from-yellow-50 to-amber-50',
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-200',
    hoverColor: 'group-hover:bg-yellow-600'
  },
  {
    id: 'sanitaire',
    nom: 'Sanitaire',
    description: 'Équipements sanitaires modernes alliant fonctionnalité et esthétique. Lavabos, robinetterie, douches et accessoires de salle de bain.',
    image: '/sanitaire-image.png',
    link: 'gamme/sanitaire',
    produits: [
      'Robinetterie',
      'Lavabos et éviers',
      'Douches et baignoires',
      'WC et accessoires',
      'Chauffe-eau'
    ],
    bgColor: 'from-purple-50 to-violet-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    hoverColor: 'group-hover:bg-purple-600'
  },
  {
    id: 'platerie',
    nom: 'Plâtrerie',
    description: 'Solutions complètes pour la construction sèche et l\'aménagement intérieur. Plaques de plâtre, enduits et accessoires.',
    image: '/platerie-image.png',
    link: 'gamme/platerie',
    produits: [
      'Plaques de plâtre',
      'Rails et montants',
      'Enduits et bandes',
      'Trappes de visite',
      'Suspentes et accessoires'
    ],
    bgColor: 'from-gray-50 to-slate-50',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-200',
    hoverColor: 'group-hover:bg-gray-600'
  },
  {
    id: 'outillage',
    nom: 'Outillage',
    description: 'Outils professionnels pour tous les corps de métier du bâtiment. Outillage électroportatif, manuel et accessoires de qualité.',
    image: '/outillage-image.png',
    link: 'gamme/outillage',
    produits: [
      'Outillage électroportatif',
      'Outillage à main',
      'Échelles et échafaudages',
      'Mesure et traçage',
      'Consommables'
    ],
    bgColor: 'from-orange-50 to-amber-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    hoverColor: 'group-hover:bg-orange-600'
  }
];

// Composant pour l'animation au défilement
const FadeInWhenVisible = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const UniversProduitPage = () => {
  // Ajout pour le carrousel manuel
  const logosContainerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF7FF]">
      {/* Hero compact */}
      <section className="relative h-56 md:h-64 w-full overflow-hidden shadow-sm">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/image-univers-produits.jpg"
            alt="Univers produits Distritherm"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Univers Produits</h1>
          <Breadcrumb />
        </div>
        <div className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2">
          <svg viewBox="0 0 1600 100" className="w-full h-6 md:h-8" preserveAspectRatio="none">
            <path d="M0,0 C600,100 1000,100 1600,0 L1600,100 L0,100 Z" fill="#EEF7FF" />
          </svg>
        </div>
      </section>

      <main className="flex-grow relative z-10">
        {/* Statistiques clés */}
        <section className="py-12 bg-[#EEF7FF]">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6 } }}
            >
              {[
                { value: '10 000+', label: 'Références produits', icon: <FaBoxOpen className="w-6 h-6" /> },
                { value: '48h', label: 'Livraison rapide', icon: <FaClock className="w-6 h-6" /> },
                { value: '8', label: 'Univers produits', icon: <FaLayerGroup className="w-6 h-6" /> },
                { value: '100%', label: 'Clients satisfaits', icon: <FaSmile className="w-6 h-6" /> },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                  className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl p-6 text-center cursor-default select-none transition-transform duration-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#159b8a]/20 to-[#007FFF]/20 text-[#159b8a]">
                    {stat.icon}
                  </div>
                  <span className="block text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</span>
                  <span className="block text-sm text-gray-700">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Présentation générale */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <FadeInWhenVisible>
                <div className="flex-1 max-w-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Des solutions <span className="text-[#159b8a]">complètes</span> pour tous vos besoins
                  </h2>
                  <ul className="text-gray-600 mb-6 space-y-3 text-lg">
                    <li>✔️ Stock permanent sur l'ensemble des familles</li>
                    <li>✔️ Livraison rapide sur chantier ou retrait en agence</li>
                    <li>✔️ Conseils personnalisés par des experts métier</li>
                    <li>✔️ Marques leaders et produits éco-responsables</li>
                    <li>✔️ Service location de matériel professionnel</li>
                  </ul>
                
                </div>
              </FadeInWhenVisible>
              <div className="flex-1 flex justify-end w-full">
                <div className="relative max-w-full w-[350px] md:w-[500px] lg:w-[700px] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/platerie-image.png" 
                    alt="Illustration univers produits" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 968px) 300vw, 1200px" 
                    priority 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catégories de produits */}
        <section className="py-16 bg-gradient-to-br from-[#EEF7FF] to-white">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Nos familles de produits
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                Explorez notre gamme organisée par univers pour trouver rapidement la solution adaptée à votre chantier.
              </p>
            </FadeInWhenVisible>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {categories.map((categorie, index) => (
                <motion.div
                  key={categorie.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  whileHover={{ scale: 1.04 }}
                  className="relative"
                >
                  <Link href={`/${categorie.link}`} className="block">
                    <div className={`bg-gradient-to-br from-[#eaf6ff] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border ${categorie.borderColor} h-full group relative`}>
                      <div className="relative h-52 overflow-hidden">
                        <Image 
                          src={categorie.image} 
                          alt={categorie.nom} 
                          fill 
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <h3 className="text-white font-bold text-xl p-4">{categorie.nom}</h3>
                        </div>
                        
                      </div>
                      <div className="p-5">
                        <p className="text-gray-600 text-sm mb-4 min-h-[48px]">{categorie.description}</p>
                        <div className="space-y-2">
                          <h4 className={`${categorie.textColor} font-semibold mb-2 text-sm`}>Produits phares :</h4>
                          <ul className="space-y-1">
                            {categorie.produits.slice(0, 3).map((produit, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center">
                                <svg className={`w-3 h-3 ${categorie.textColor} mr-2`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                {produit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-5 flex justify-end">
                          <Link href={`/${categorie.link}`}>
                            <span className={`inline-flex items-center text-sm font-medium ${categorie.textColor} group-hover:underline`}>
                              Découvrir la gamme
                              <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section marques partenaires */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#159b8a] to-[#007FFF] bg-clip-text text-transparent">
                Nos marques partenaires
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Nous travaillons avec les meilleures marques du marché pour vous garantir des produits de qualité, durables et performants.
              </p>
            </FadeInWhenVisible>
            <div className="relative">
              {/* Boutons de scroll manuel */}
              <button
                aria-label="Défiler vers la gauche"
                onClick={() => scrollLogos('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#159b8a] hover:text-white text-[#159b8a] rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all border border-[#159b8a]"
                style={{ boxShadow: '0 2px 8px #159b8a22' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                aria-label="Défiler vers la droite"
                onClick={() => scrollLogos('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#159b8a] hover:text-white text-[#159b8a] rounded-full shadow-lg w-10 h-10 flex items-center justify-center transition-all border border-[#159b8a]"
                style={{ boxShadow: '0 2px 8px #159b8a22' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              <motion.div
                className="overflow-x-auto scrollbar-hide w-full"
                ref={logosContainerRef}
                initial={{}}
                animate={{}}
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <motion.div
                  className="flex gap-10 items-center w-full"
                  animate={{ x: [0, -600] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                >
                  {[
                    '/fournisseurs/deville-logo.jpg',
                    '/fournisseurs/edma-logo.jpg',
                    '/fournisseurs/invicta-logo.png',
                    '/fournisseurs/spp-h-logo.jpg',
                    '/fournisseurs/talia-logo.jpg',
                    '/fournisseurs/fhe_logo.webp',
                    '/fournisseurs/dewalt_logo.jpg',
                    '/fournisseurs/clivet_logo19.png',
                    '/fournisseurs/logo_multitubo.jpg',
                    '/fournisseurs/logo_ursa_hd.jpg',
                    '/fournisseurs/logo_teddington_1934_cmjn_vecto_bd.jpg',
                    '/fournisseurs/makita_logo.png',
                    '/fournisseurs/logo_stanley_utilisation_digitale.jpg',
                    '/fournisseurs/watts_logo_dernier.jpg',
                    '/fournisseurs/rockwool_logo_primary_colour_rgb.png',
                    '/fournisseurs/knauf-logo.png',
                    '/fournisseurs/airsolar-logo.png',
                    '/fournisseurs/airwell-logo.png',
                    '/fournisseurs/logo-adrien.png',
                    '/fournisseurs/logo-izar.jpg',
                    '/fournisseurs/wavin-logo.png',
                  ].map((logo, index) => (
                    <div key={index} className="w-32 h-16 md:w-40 md:h-20 relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#159b8a]/20 flex-shrink-0">
                      <Image 
                        src={logo} 
                        alt="Marque partenaire" 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  ))}
                  {/* On duplique la liste pour un effet de boucle continue */}
                  {[
                    '/fournisseurs/deville-logo.jpg',
                    '/fournisseurs/edma-logo.jpg',
                    '/fournisseurs/invicta-logo.png',
                    '/fournisseurs/spp-h-logo.jpg',
                    '/fournisseurs/talia-logo.jpg',
                    '/fournisseurs/fhe_logo.webp',
                    '/fournisseurs/dewalt_logo.jpg',
                    '/fournisseurs/clivet_logo19.png',
                    '/fournisseurs/logo_multitubo.jpg',
                    '/fournisseurs/logo_ursa_hd.jpg',
                    '/fournisseurs/logo_teddington_1934_cmjn_vecto_bd.jpg',
                    '/fournisseurs/makita_logo.png',
                    '/fournisseurs/logo_stanley_utilisation_digitale.jpg',
                    '/fournisseurs/watts_logo_dernier.jpg',
                    '/fournisseurs/rockwool_logo_primary_colour_rgb.png',
                    '/fournisseurs/knauf-logo.png',
                    '/fournisseurs/airsolar-logo.png',
                    '/fournisseurs/airwell-logo.png',
                    '/fournisseurs/logo-adrien.png',
                    '/fournisseurs/logo-izar.jpg',
                    '/fournisseurs/wavin-logo.png',
                  ].map((logo, index) => (
                    <div key={index+100} className="w-32 h-16 md:w-40 md:h-20 relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#159b8a]/20 flex-shrink-0">
                      <Image 
                        src={logo} 
                        alt="Marque partenaire" 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section avantages */}
        <section className="py-16 bg-gradient-to-br from-[#159b8a]/5 to-blue-500/5">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                Pourquoi choisir Distritherm Services ?
              </h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10 text-[#159b8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  title: 'Qualité garantie',
                  description: 'Tous nos produits sont sélectionnés pour leur qualité et leur durabilité, et sont garantis par nos fournisseurs.'
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-[#159b8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  title: 'Livraison rapide',
                  description: 'Service de livraison rapide sur l\'ensemble de l\'Île-de-France et au-delà pour vous permettre d\'avancer sur vos chantiers.'
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-[#159b8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  title: 'Conseil expert',
                  description: 'Notre équipe de conseillers techniques vous guide dans le choix des produits les plus adaptés à vos projets.'
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-[#159b8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  title: 'Prix compétitifs',
                  description: 'Nous négocions directement avec les fabricants pour vous proposer les meilleurs prix du marché.'
                }
              ].map((avantage, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
                    <div className="rounded-full bg-[#159b8a]/10 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#159b8a]/20 transition-colors duration-300">
                      {avantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#159b8a] transition-colors duration-300">{avantage.title}</h3>
                    <p className="text-gray-600 flex-grow">{avantage.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#159b8a] to-blue-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12">
                  <FadeInWhenVisible>
                    <h2 className="text-3xl font-bold text-white mb-4">Besoin d'assistance pour votre projet ?</h2>
                    <p className="text-white/90 mb-8">
                      Nos experts sont à votre disposition pour vous accompagner dans le choix des produits 
                      adaptés à votre projet et vous conseiller sur les meilleures solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <button className="px-6 py-3 bg-white text-[#159b8a] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                          Demander un devis
                        </button>
                      </Link>
                      <Link href="/recrutement">
                        <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                          Nous rejoindre ?
                        </button>
                      </Link>
                    </div>
                  </FadeInWhenVisible>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="h-64 md:h-full min-h-[320px] relative">
                    <Image 
                      src="/devis-gratuit.png" 
                      alt="Assistance projet" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#159b8a]/80 to-transparent md:from-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversProduitPage; 