'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import { GiBathtub, GiShower } from 'react-icons/gi';
import { MdSupportAgent, MdBathroom } from 'react-icons/md';
import { BsDroplet } from 'react-icons/bs';
import Breadcrumb from '@/components/navigation/Breadcrumb';
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

const SanitairePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sanitaire-image2.png"
              alt="Équipement sanitaire professionnel"
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
                Magasin d'équipement sanitaire professionnel
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Vous avez besoin d'un partenaire fiable pour vous fournir en équipement sanitaire de qualité ?
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
            <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center items-stretch"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/sanitaire3.png"
                    alt="Gamme complète sanitaire"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[400px] max-h-[350px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                  Une gamme complète d'équipements sanitaires
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Découvrez notre gamme et tous nos articles pour concevoir une offre exhaustive pour la salle de bain ou pour des espaces sanitaires public.
                  </p>
                  <p>
                    Avec nos deux établissements judicieusement situés à Taverny et Drancy, nous assurons un service efficace non seulement pour les villes de Franconville, Saint-Leu-la-Forêt, Argenteuil, Bobigny, mais aussi pour l'ensemble du territoire français.
                  </p>
                  <p>
                    Nos produits de marque italienne, ont été choisis pour leur longévité, qualité, fonctionnalité et coût. Vous aurez donc accès à des produits haut de gamme pour la mise en œuvre de vos projets qu'ils soient neufs ou de rénovation.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Produits disponibles */}
            <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Espace sanitaire au magasin de Taverny et Drancy
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    En Île-de-France et au-delà, nous pouvons vous livrer des produits de grande qualité:
                  </p>
                  <ul>
                    <li>Vasques, lavabos et plans vasques de différentes tailles et matières, WC, bidets et urinoirs, avec les systèmes de chasse associés</li>
                    <li>Receveurs de douche extra-plats, bacs à douche, parois et colonnes de douche</li>
                    <li>Baignoires en acrylique ou acier</li>
                    <li>Robinetterie pour lavabos, douches</li>
                    <li>Meubles de salle de bain suspendus ou au sol, armoires de toilette et miroirs</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Découvrir nos produits
                  </Link>
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
                    src="/sanitaire1.png"
                    alt="Sanitaire chantier"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[300px] max-h-[350px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Sur-mesure */}
            <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center items-stretch"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/sanitaire2.png"
                    alt="Sur-mesure sanitaire"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[400px] max-h-250px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex-1 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  Du sur-mesure pour personnaliser vos chantiers
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Notre gamme de toilettes et bâtis-supports intègre les technologies les plus récentes en matière d'économie d'eau et de propreté.
                  </p>
                  <p>
                    Notre sélection de robinetterie quant à elle répond à tous les besoins, allant des mitigeurs traditionnels aux dispositifs électroniques destinés aux espaces publics.
                  </p>
                  <p>
                    Nous offrons aussi des solutions intégrales de gestion de l'eau et une vaste sélection de chauffe-eaux adaptés à diverses configurations y compris le chauffe-eau combiné solaire pour répondre aux exigences croissantes d'économie d'énergie.
                  </p>
                  <p>
                    Qu'il s'agisse de meuble vasque, du meuble standard, de paroi de douche ou de miroirs, nous vous proposons l'option de personnaliser chaque élément à dimension et ainsi créer une offre unique pour vos clients.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Solutions PMR */}
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
                    <MdBathroom className="text-white w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                  Solutions pour tous types de projets
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Si vous recherchez une solution conforme aux normes PMR pour vos projets dans les ERP, venez nous rencontrer à Taverny ou à Drancy.
                  </p>
                  <p>
                    Pour les projets les plus exigeants, nous proposons des collections design comprenant des robinets thermostatiques, vasques en matériaux innovants et systèmes de douche connectés. Nous disposons également de solutions spécifiques pour les sanitaires communs : robinetterie temporisée, systèmes anti-vandalisme et équipements de grande capacité...
                  </p>
                  <p className="text-center font-semibold">
                    Peu importe votre besoin, nous avons ce qu'il vous faut chez DISTRITHERM Services.
                  </p>
                  <p>
                    Choisir DISTRITHERM Services pour vos achats d'équipement sanitaire professionnel, signifie opter pour un partenaire qui comprend vos enjeux et anticipe vos besoins.
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Demander un rendez-vous
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Solutions avancées */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Pour aller encore plus loin
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Nous proposons des solutions comme les robinets à détection infrarouge, les systèmes de chasse d'eau à double commande, ou encore les mitigeurs thermostatiques mixtes de dernière génération. Ces équipements permettent de réduire la consommation d'eau jusqu'à 30% tout en garantissant un confort optimal pour les utilisateurs finaux.
                </p>
                <p>
                  Pour finir, notre sélection de matériel sanitaire et plomberie comprend aussi tous les éléments indispensables aux installations, tels que les systèmes d'évacuation, les siphons, les raccords ou encore les chauffe-eau.
                </p>
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
                Les avantages de notre offre sanitaire
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <GiBathtub className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Qualité italienne</h3>
                      <p className="text-gray-700">
                        Des produits sélectionnés pour leur longévité, qualité, fonctionnalité et rapport qualité-prix optimal.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <GiShower className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Personnalisation</h3>
                      <p className="text-gray-700">
                        Des solutions sur-mesure pour adapter chaque élément aux dimensions et besoins spécifiques de vos projets.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <BsDroplet className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Économie d'eau</h3>
                      <p className="text-gray-700">
                        Des technologies innovantes permettant de réduire la consommation d'eau jusqu'à 30% tout en garantissant un confort optimal.
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
                      <h3 className="font-semibold text-xl mb-2">Conseil expert</h3>
                      <p className="text-gray-700">
                        Un accompagnement personnalisé pour vous aider à choisir les solutions les plus adaptées à vos projets.
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en équipement sanitaire
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets sanitaires.
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

export default SanitairePage; 