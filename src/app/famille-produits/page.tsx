'use client';

import React, { useEffect, useRef, ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBoxOpen, FaClock, FaLayerGroup, FaSmile } from 'react-icons/fa';
import PartnersCarousel from '@/components/acceuil/PartnersCarousel';

// Composant AnimatedCounter pour l'animation des chiffres
const AnimatedCounter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = numericValue / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, numericValue, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString('fr-FR')}{suffix}
    </span>
  );
};

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
    image: '/image-isolation.png',
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
    nom: 'Energie solaire',
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
    image: '/sanitaire-image2.png',
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
    image: '/outillage.png',
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
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF7FF]">
      {/* Hero compact */}
      <section className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden shadow-md">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0">
            <Image
              src="/image-univers-produits.jpg"
              alt="Recrutement Distritherm Services"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Voile sombre en dégradé pour une meilleure lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm" />
          </div>

          {/* Contenu : Titre + Breadcrumb */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">Univers Produits</h1>
            <br />
            <Breadcrumb />
          </div>

          {/* Ombre courbée en bas */}
          <div className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2">
            <svg viewBox="0 0 1600 100" className="w-full h-6 md:h-8" preserveAspectRatio="none">
              <path d="M0,0 C600,100 1000,100 1600,0 L1600,100 L0,100 Z" fill="#f8f9ff"/>
            </svg>
          </div>
        </section>

      <main className="flex-grow relative z-10">
        {/* Statistiques clés */}
        <section className="py-16 bg-gradient-to-br from-[#EEF7FF] via-white to-[#E6F4FF] relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#159b8a]/10 to-[#007FFF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#007FFF]/10 to-[#159b8a]/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.15, duration: 0.8 }}
            >
              {[
                { value: '8000+', label: 'Références produits', icon: <FaBoxOpen className="w-7 h-7" />, color: 'from-[#159b8a] to-[#0F7B6C]' },
                { value: '24h', label: 'Livraison rapide', icon: <FaClock className="w-7 h-7" />, color: 'from-[#007FFF] to-[#0056b3]' },
                { value: '9', label: 'Univers produits', icon: <FaLayerGroup className="w-7 h-7" />, color: 'from-[#6366F1] to-[#4F46E5]' },
                { value: '99%', label: 'Clients satisfaits', icon: <FaSmile className="w-7 h-7" />, color: 'from-[#F59E0B] to-[#D97706]' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:shadow-black/10 transition-all duration-300"></div>
                  <div className="relative z-10 p-8 text-center">
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 tracking-tight">
                      <AnimatedCounter value={stat.value} duration={2500} />
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">{stat.label}</div>
                  </div>
                  {/* Effet de lumière au survol */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
                    <li>✔️ Conseils personnalisés par des experts métiers</li>
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
          <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="relative inline-block">
                  Nos familles <span className="font-bold text-[#1E90FF]">produits</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto py-4">
                Explorez notre gamme organisée par univers pour trouver rapidement la solution adaptée à votre chantier
                </p>
              </div>
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
                  <Link href={`/${categorie.link}`} className="block h-full">
                    <div className={`bg-gradient-to-br from-[#eaf6ff] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border ${categorie.borderColor} h-full flex flex-col group relative`}>
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
                      <div className="p-5 flex flex-col flex-1">
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
                        <div className="mt-auto flex justify-end">
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
        <PartnersCarousel />

        {/* Section avantages */}
        <section className="py-16 bg-gradient-to-br from-[#1E90FF]/5 to-blue-500/5">
          <div className="container mx-auto px-4">
          <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="relative inline-block">
                    Pourquoi choisir  <span className="font-bold text-[#1E90FF]">Distritherm Services</span> 
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto py-4">
                  Découvrez les avantages qui font de nous votre partenaire privilégié
                </p>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <img src="/icone/produit-qualite.png" alt="Produits de Qualité" className="w-10 h-10 object-contain" />
                  ),
                  title: 'Produits de Qualité',
                  description: 'Nous mettons un point d\'honneur à choisir des produits certifiés et brevetés pour vous garantir performance et fiabilité.'
                },
                {
                  icon: (
                    <img src="/icone/disponibilite.png" alt="Disponibilité Immédiate" className="w-10 h-10 object-contain" />
                  ),
                  title: 'Disponibilité Immédiate',
                  description: 'Plus de 3 000 références en stock pour un usage immédiat. A retirer en magasin ou en livraison sous 48/72h.'
                },
                {
                  icon: (
                    <img src="/icone/expertise.png" alt="Expertise Technique" className="w-10 h-10 object-contain" />
                  ),
                  title: 'Expertise Technique',
                  description: 'Notre force est notre expertise, nous nous formons tous les jours aux nouveautés des matériaux et systèmes mis sur le marché.'
                },
                {
                  icon: (
                    <img src="/icone/prix.png" alt="Prix compétitifs" className="w-10 h-10 object-contain" />
                  ),
                  title: 'Prix compétitifs',
                  description: 'Nous négocions directement avec les fabricants pour vous proposer les meilleurs prix du marché.'
                }
              ].map((avantage, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div
                    className={`${
                      avantage.title === 'Produits de Qualité'
                        ? 'bg-gradient-to-r from-[#8EC5FC] via-[#c2d9fe] to-[#E0C3FC] text-gray-800 shadow-lg relative overflow-hidden'
                        : avantage.title === 'Disponibilité Immédiate'
                        ? 'bg-gradient-to-r from-[#FFE5B4] via-[#FFD3A5] to-[#FFBC8B] text-gray-800 shadow-lg relative overflow-hidden'
                        : avantage.title === 'Expertise Technique'
                        ? 'bg-gradient-to-r from-[#D1F7C4] via-[#B6F3E6] to-[#C0F2F1] text-gray-800 shadow-lg relative overflow-hidden'
                        : avantage.title === 'Prix compétitifs'
                        ? 'bg-gradient-to-r from-[#FFD6E0] via-[#FDC5D0] to-[#F6B4C2] text-gray-800 shadow-lg relative overflow-hidden'
                        : 'bg-white text-gray-800 shadow-md'
                    } rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[300px] flex flex-col`}
                  >
                    {/* Icône de fond (grande, décorative) */}
                    {avantage.title === 'Produits de Qualité' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/icone/produit-qualite.png" alt="Fond Produits de Qualité" className="w-32 h-32 object-contain" />
                      </div>
                    )}
                    {avantage.title === 'Disponibilité Immédiate' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/icone/disponibilite.png" alt="Fond Disponibilité Immédiate" className="w-32 h-32 object-contain" />
                      </div>
                    )}
                    {avantage.title === 'Expertise Technique' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/icone/expertise.png" alt="Fond Expertise Technique" className="w-32 h-32 object-contain" />
                      </div>
                    )}
                    {avantage.title === 'Prix compétitifs' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/icone/prix.png" alt="Fond Prix compétitifs" className="w-32 h-32 object-contain" />
                      </div>
                    )}

                    {/* Petite icône principale */}
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-3xl rounded-full bg-white/40 backdrop-blur-sm border-2 border-white/50 text-[#159b8a] relative z-10">
                      {avantage.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 relative z-10 text-gray-800">{avantage.title}</h3>
                    <p className="flex-grow relative z-10 text-gray-700">{avantage.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-[#159b8a] to-blue-500 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
                  <FadeInWhenVisible>
                    <h2 className="text-3xl font-bold text-white mb-4">Besoin d'assistance pour votre projet ?</h2>
                    <p className="text-white/90 mb-8 max-w-6xl mx-auto">
                      Nos experts sont à votre disposition pour vous accompagner dans le choix des produits 
                      adaptés à votre projet et vous conseiller sur les meilleures solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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