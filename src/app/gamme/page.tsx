'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/navigation/Breadcrumb';

// Définition des catégories avec leurs images et descriptions
const categories = [
  { 
    id: 'platerie', 
    name: 'Plâtrerie', 
    image: '/platerie-image.png',
    description: 'Solutions complètes pour cloisons et plafonds, adaptées à tous vos projets de construction et rénovation.'
  },
  { 
    id: 'isolation', 
    name: 'Isolation', 
    image: '/image-isolation.png',
    description: 'Matériaux isolants performants pour une efficacité thermique et acoustique optimale de vos bâtiments.'
  },
  { 
    id: 'chauffage', 
    name: 'Chauffage', 
    image: '/chauffage-image2.png',
    description: 'Systèmes de chauffage efficaces et économiques pour tous types de bâtiments résidentiels et tertiaires.'
  },
  { 
    id: 'climatisation', 
    name: 'Climatisation', 
    image: '/climatisation-image.png',
    description: 'Solutions de confort thermique pour maintenir une température idéale en toutes saisons.'
  },
  { 
    id: 'sanitaire', 
    name: 'Sanitaire', 
    image: '/sanitaire-image2.png',
    description: 'Équipements de qualité pour salles de bain et installations sanitaires professionnelles.'
  },
  { 
    id: 'plomberie', 
    name: 'Plomberie', 
    image: '/plomberie-image.png',
    description: 'Tuyauterie, raccords et accessoires professionnels pour des installations durables et fiables.'
  },
  { 
    id: 'electricite', 
    name: 'Électricité', 
    image: '/electricite-image.png',
    description: 'Matériel électrique de qualité pour des installations sécurisées et aux normes.'
  },
  { 
    id: 'outillage', 
    name: 'Outillage', 
    image: '/outillage.png',
    description: 'Outils professionnels et équipements spécialisés pour tous vos travaux de construction.'
  },
  { 
    id: 'epi', 
    name: 'EPI', 
    image: '/epi-image.png',
    description: 'Équipements de protection individuelle conformes aux normes de sécurité pour vos équipes.'
  },
];

const GammePage = () => {
  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF7FF]">
      {/* Hero compact */}
      <section className="relative h-56 md:h-64 w-full overflow-hidden shadow-sm">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/image-univers-produits.jpg"
            alt="Notre gamme de produits"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Gamme Produits</h1>
          <Breadcrumb />
        </div>
        <div className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2">
          <svg viewBox="0 0 1600 100" className="w-full h-6 md:h-8" preserveAspectRatio="none">
            <path d="M0,0 C600,100 1000,100 1600,0 L1600,100 L0,100 Z" fill="#EEF7FF" />
          </svg>
        </div>
      </section>
      <main className="flex-grow relative z-10">
          
        {/* Section Catégories */}
        <section className="py-16 relative">
               <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 inline-block relative">
                  <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                    Nos différents Catégories Produits
                  </span>
                  <span className="block absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full" />
                </h2>
              </div>
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.div 
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={`/gamme/${category.id}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-2xl group">
                      <div className="relative h-64 w-full">
                        <Image
                          src={category.image}
                          alt={`Catégorie ${category.name}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#7CB9E8] transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Pourquoi choisir <span className="text-[#007FFF]">DISTRITHERM Services</span> ?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nous mettons à votre disposition une gamme complète de produits de qualité professionnelle, avec un service personnalisé et une expertise reconnue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Produits de Qualité</h3>
                <p className="text-gray-700 text-center">
                  Nous sélectionnons rigoureusement nos produits pour vous garantir fiabilité et performance sur tous vos chantiers.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Disponibilité Immédiate</h3>
                <p className="text-gray-700 text-center">
                  Plus de 10 000 références en stock et une livraison en 48h partout en France pour répondre à vos besoins urgents.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Expertise Technique</h3>
                <p className="text-gray-700 text-center">
                  Notre équipe d'experts vous accompagne dans le choix des matériaux adaptés à vos projets spécifiques.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-3xl p-10 text-center shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
                Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contactez-nous
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        .animate-blob-delay-2000 {
          animation: blob 12s infinite alternate;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default GammePage; 