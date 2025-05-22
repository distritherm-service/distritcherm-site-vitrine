'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock, FaWrench, FaHammer } from 'react-icons/fa';
import { MdSupportAgent, MdConstruction } from 'react-icons/md';
import { GiDrill, GiSawedOffShotgun } from 'react-icons/gi';
import { TbTool } from 'react-icons/tb';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/BackButton';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const OutillagePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/outillage-image.png"
              alt="Outillage professionnel et équipements"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          </div>
          
          {/* Contenu Hero */}
          <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                L'outillage est tout un art
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Pour l'excellence de vos chantiers, DISTRITHERM Services est là pour vous.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Contactez-nous
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Section 1 : Texte + Image à droite */}
            <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                  Artisan spécialiste, à la recherche d'outillage de qualité pour vos chantiers ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Distritherm Services comprend l'importance de disposer des bons outils à tout moment. C'est pourquoi nous vous proposons une large gamme d'outillage professionnel stockée en permanence pour parfaire vos chantiers.
                  </p>
                  <p>
                    Installation, rénovation, maintenance... De la préparation des chantiers à la finition, vous recherchez des solutions performantes tout en respectant la réglementation. Notre équipe Distritherm Services vous propose de nombreuses références produits pour réussir vos projets.
                  </p>
                  <p>
                    Pour compléter votre approvisionnement en outillage, vous trouverez des outils électroportatifs, des outils à main, des accessoires et les équipements appropriés pour travailler dans les meilleures conditions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center items-stretch"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/outillage2.jpg"
                    alt="Outillage chantier"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[500px] max-h-[400px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Séparateur décoratif */}
            <div className="w-full flex justify-center mb-16">
              <svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="90" cy="16" rx="90" ry="16" fill="#7CB9E8" fillOpacity="0.12" />
              </svg>
            </div>

            {/* Section 2 : Image à gauche + texte */}
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-12 mb-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Une gamme complète et des solutions adaptées à chaque configuration
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Matériau incontournable sur les chantiers, l'outillage moderne offre de nombreux avantages. Facile à utiliser et à maintenir, il permet une mise en œuvre rapide des travaux. Sa fiabilité et sa sécurité en font un choix idéal pour les professionnels. Il présente d'excellentes propriétés de performance et de durabilité, contribuant ainsi à la qualité et à la sécurité des installations.
                  </p>
                  <p>
                    Pour répondre à la diversité des besoins de nos clients artisans et professionnels, nous proposons chez DISTRITHERM Services une large sélection de produits :
                  </p>
                  <ul>
                    <li>Des outils électroportatifs pour les travaux intensifs</li>
                    <li>Des outils à main pour la précision</li>
                    <li>Des équipements de sécurité pour la protection</li>
                    <li>Des accessoires et consommables pour le confort</li>
                    <li>Une gamme complète d'outillage spécialisé</li>
                  </ul>
                  <p>
                    Car chaque chantier est différent et nous le savons, nous sommes en mesure de vous fournir des solutions spécifiques pour répondre à vos besoins particuliers, que ce soit pour des installations, des rénovations ou des maintenances.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Voir tous nos produits
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gray-300 transition-colors duration-300"
                  >
                    Demander un devis
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center items-stretch"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/outillage3.jpg"
                    alt="Matériel d'outillage"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[500px] max-h-[500px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Séparateur décoratif */}
            <div className="w-full flex justify-center mb-16">
              <svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="90" cy="16" rx="90" ry="16" fill="#007FFF" fillOpacity="0.10" />
              </svg>
            </div>

            {/* Section 3 : Texte + Image à droite */}
            <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  Solutions pour professionnels
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Vous envisagez la conception ou la rénovation d'un chantier? Avec notre sélection d'outillage professionnel, rien de plus simple.
                  </p>
                  <p>
                    Vous trouverez des solutions adaptées pour tous vos besoins, des petits travaux aux grands chantiers.
                  </p>
                  <p>
                    Des systèmes d'outillage équipés d'accessoires de sécurité permettent un contrôle optimal des opérations. Ceci est particulièrement utile dans les grands chantiers ou les installations complexes nécessitant une gestion précise des travaux.
                  </p>
                  <p>
                    Une gamme standard stockée vous offre la possibilité de répondre et traiter vos demandes les plus habituelles avec des outils courants, ou dans des dimensions spécifiques selon vos besoins.
                  </p>
                  <p>
                    À la demande, vous découvrirez une solution personnalisée Distritherm Services pour un chantier répondant aux critères les plus stricts de vos clients.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center items-stretch"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/outillage1.jpg"
                    alt="Installations professionnelles"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[400px] max-h-[400px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Accessoires */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 mb-16 shadow-sm border border-blue-200"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <FaTools className="text-white w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                  Pour la pérennité de vos installations
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Afin de parfaire votre outillage, nous offrons les équipements essentiels pour garantir le bon déroulement de vos travaux :
                  </p>
                  <ul>
                    <li>Outillage spécialisé : perceuses, visseuses, scies...</li>
                    <li>Accessoires de fixation et de raccordement</li>
                    <li>Matériel de mesure et de contrôle</li>
                    <li>Tous les accessoires adaptés : forets, lames, embouts...</li>
                  </ul>
                  <p>
                    Nous proposons diverses solutions en matériel :
                  </p>
                  <ul>
                    <li>Des outils électroportatifs de toutes marques</li>
                    <li>Des outils à main de qualité</li>
                    <li>Des accessoires de fixation et de raccordement</li>
                    <li>Des outils professionnels</li>
                    <li>Des pièces de rechange</li>
                  </ul>
                  <p>
                    Nous saurons trouver le produit qu'il vous faut.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Disponibilité */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
                Disponibilité produit immédiate
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Chez DISTRITHERM Services, nous savons que les délais sont souvent serrés sur les chantiers. C'est pourquoi nous maintenons en permanence un stock important de matériel standard dans nos entrepôts de Taverny et Drancy. Vous pouvez commander vos produits et choisir la livraison express sous 48 heures ou le retrait en magasin. Quel que soit votre choix, vous êtes assuré d'obtenir rapidement les matériaux dont vous avez besoin.
                </p>
                <p>
                  Avec notre stock permanent, notre équipe commerciale, nos services de livraison et retrait express, nous sommes le partenaire idéal pour tous vos projets dans le bâtiment. Professionnels de Taverny, de Drancy et leurs environs, n'hésitez pas à nous contacter.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Nous contacter
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Avantages */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
                Les avantages de nos produits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegLightbulb className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Qualité professionnelle</h3>
                      <p className="text-gray-700">
                        Tous nos produits sont sélectionnés pour leur qualité et leur conformité aux normes en vigueur dans le bâtiment.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaShieldAlt className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Performances techniques</h3>
                      <p className="text-gray-700">
                        Sécurité, fiabilité, résistance : nos produits répondent à toutes les exigences techniques.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaTruck className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Disponibilité immédiate</h3>
                      <p className="text-gray-700">
                        Notre stock permanent vous garantit l'accès aux produits dont vous avez besoin, quand vous en avez besoin.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MdSupportAgent className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Conseil personnalisé</h3>
                      <p className="text-gray-700">
                        Notre équipe d'experts vous accompagne dans le choix des produits adaptés à chaque projet spécifique.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-3xl p-10 mb-16 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Faites confiance à DISTRITHERM Services pour tous vos besoins en outillage
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Contactez-nous
                </Link>
                <Link 
                  href="/qui-sommes-nous" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <BackButton />
      <Footer />
    </div>
  );
};

export default OutillagePage; 