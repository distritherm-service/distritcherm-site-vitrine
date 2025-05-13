'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock, FaWrench, FaHammer } from 'react-icons/fa';
import { MdSupportAgent, MdConstruction } from 'react-icons/md';
import { GiDrill, GiSawedOffShotgun } from 'react-icons/gi';
import { TbTool } from 'react-icons/tb';
import Footer from '@/components/layout/Footer';

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
              src="/outillage.jpeg"
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
                L'outillage professionnel indispensable
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Distritherm Services vous offre une gamme complète d'outillage pour la réalisation de travaux et chantiers réussis.
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
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Partenaire indispensable pour les professionnels
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Partenaire indispensable pour les plombiers, électriciens, plaquistes et autres entreprises tous corps de métier, Distritherm votre allié de confiance.
                </p>
                <p>
                  L'acquisition d'outils constitue une dépense significative à considérer dans votre profession. Nous saisissons bien l'importance de disposer d'outils de qualité sans pour autant faire exploser votre budget. Voilà pourquoi nous déployons tous nos efforts pour vous garantir la satisfaction de découvrir des outils fiables, robustes, faciles à manipuler et pratiques pour un gain de temps lors de vos installations.
                </p>
              </div>
            </motion.div>

            {/* Gamme complète */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-50 rounded-3xl p-8 mb-16 shadow-sm border border-gray-100"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Une gamme complète et des solutions adaptées à chaque configuration
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Des outils de coupe, perçage et ponçage aux instruments de mesure et de diagnostic en passant par l'outillage à main, électroportatifs et pneumatiques, vous disposerez de tout ce dont vous avez besoin pour un travail efficace.
                  </p>
                  <p>
                    Pour vous assurer un outillage de qualité supérieure, nous faisons appel aux plus grandes marques, reconnues pour leur fiabilité et leurs performances.
                  </p>
                  <p>
                    Ainsi, notre offre inclut notamment l'ensemble des outils portatifs Bosch Pro et Makita, plébiscitées par les professionnels pour leur solidité et de leur ergonomie. Les marques EDMA et Taliaplast assurent des outils de qualité durable et précise pour l'outillage à main.
                  </p>
                  <p>
                    Enfin, notre sélection d'accessoires techniques comprend une vaste gamme de forets, trépans et disques compatibles avec toutes les marques populaires.
                  </p>
                  <p>
                    Les frigoristes pourront également trouver chez nous les outils requis pour leurs interventions.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Découvrir nos produits
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* L'expertise DISTRITHERM */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                L'expertise DISTRITHERM pour vous servir
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Chez DISTRITHERM Services, nous plaçons la satisfaction de nos clients au cœur de nos priorités. Notre équipe est formée pour vous fournir un service d'excellence et de qualité à chaque étape de votre achat, depuis l'assistance jusqu'à la livraison de votre matériel à Taverny, Drancy ou ailleurs en France. Nous nous ajustons à vos contraintes et mettons en place des solutions personnalisées pour satisfaire vos attentes.
                </p>
                <p>
                  Avec DISTRITHERM Services, vous avez à vos côtés un partenaire authentique qui s'engage à la réussite de vos projets. Grâce à notre connaissance approfondie dans le domaine de l'outillage professionnel, nous sommes le partenaire de confiance des sociétés du secteur du bâtiment.
                </p>
              </div>
            </motion.div>

            {/* Stock complet */}
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
                    <FaTruck className="text-white w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                  Un service location
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                    <p className="font-medium">
                      Chez DISTRITHERM Services, nous proposons également à nos clients professionnels des possibilités de louer les appareils pour lesquels on ne veut pas forcément investir : sertisseuse, carotteuse, machine à souffler...
                    </p>
                    <p className="mb-0">
                      N'hésitez pas à nous contacter pour en savoir plus.
                    </p>
                  </div>
                  <p>
                    Notre équipe de professionnels chevronnés est à votre écoute pour vous orienter dans le choix de vos outils de frigoristes ou en tant que chauffagiste, plaquiste ou autre métier. Que vous ayez besoin de conseils techniques, d'informations sur les dernières innovations ou de solutions adaptées à vos problématiques, nous mettons notre savoir-faire à votre service.
                  </p>
                  <p>
                    Nous prenons le temps de comprendre vos besoins et de vous proposer l'outillage le mieux adapté pour optimiser votre performance sur le terrain.
                  </p>
                  <p>
                    Vous ne trouvez pas quelque chose en particulier? D'une grande réactivité et à l'écoute des besoins, nous vous souhaitons que vos chantiers se déroulent sans accroc.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Service client */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
                Un service client professionnel à votre écoute
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                DISTRITHERM Services se démarque par des services pensés pour les professionnels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegClock className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Horaires adaptés</h3>
                      <p className="text-gray-700">
                        Notre magasin d'outillage professionnel vous ouvre ses portes de 6h30 à 17h dans le but de vous soutenir chaque jour.
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
                      <h3 className="font-semibold text-xl mb-2">Livraison express</h3>
                      <p className="text-gray-700">
                        Un service de livraison express 24-48 heures sur toute l'Île-de-France et au-delà.
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
                      <h3 className="font-semibold text-xl mb-2">Conseil technique</h3>
                      <p className="text-gray-700">
                        Des conseils personnalisés pour choisir l'outillage adapté à vos besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaWrench className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Service après-vente</h3>
                      <p className="text-gray-700">
                        Un service après-vente réactif pour la maintenance et la réparation de votre outillage.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* DISTRITHERM Services, l'assurance d'un partenariat durable */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Pour une gestion plus sereine de votre temps
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Afin d'éviter les contretemps une fois sur le chantier, d'éviter d'éventuels retards, pensez à passer des commandes de stock pour plus de sérénité et de facilité à travailler sur vos projets. Nous sommes en mesure de préparer votre commande en moins de 24h !
                </p>
                {/* <div className="mt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Contactez-nous
                  </Link>
                </div> */}
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
                En optant pour DISTRITHERM Services pour vos besoins en outillage, vous choisissez la qualité, la disponibilité et le service.
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
      <Footer />
    </div>
  );
};

export default OutillagePage; 