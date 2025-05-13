'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import { GiWaterTank, GiPipes } from 'react-icons/gi';
import { MdSupportAgent, MdPlumbing } from 'react-icons/md';
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

const PlomberiePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/plomberie.jpeg"
              alt="Matériel de plomberie"
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
                Le matériel de plomberie chez Distritherm Services
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Vous cherchez du matériel de plomberie? Ne cherchez plus, c'est ici que vous trouverez ce dont vous avez besoin !
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
                Tout le matériel de plomberie pour vos chantiers
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  L'essentiel du matériel de plomberie des fabricants de raccords en laiton, en cuivre, de raccords PVC, de tubes multicouches, de tubes capillaires, de collecteurs sanitaires ou plancher chauffant, tuyaux d'évacuation PVC, des tuyaux en cuivre, parfaits pour l'eau chaude et le chauffage, en passant par les tuyaux en PER pour les installations sanitaires, notre gamme couvre tous vos besoins.
                </p>
                <p>
                  Notre sélection de tubes multicouches offre quant à elle une alternative moderne et polyvalente, particulièrement adaptée aux installations complexes. Nous proposons également une large sélection de raccords, vannes boisseau sphériques, robinets et accessoires pour réaliser des installations fiables et durables, sans oublier les joints, les tubes flexibles jusqu'à l'outillage et la quincaillerie pour vous équiper correctement avec la sertisseuse, le coupe-tubes, l'ébavureur, la cintreuse...se trouve chez Distritherm Services à Taverny (95) et à Drancy (93).
                </p>
                <p>
                  Nos différents partenaires nous permettent de vous proposer des fournitures pour vos travaux de plomberie de qualité et au bon prix marché.
                </p>
                <p>
                  Vous êtes professionnel du bâtiment et souhaitez ouvrir un compte ? Obtenir un devis ? Avoir des renseignements sur les produits référencés, contactez nous sans attendre par téléphone ou par le formulaire contact, on vous explique tout.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>

            {/* Solutions techniques */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-50 rounded-3xl p-8 mb-16 shadow-sm border border-gray-100"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Des solutions techniques adaptées pour chaque projet
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Dans le milieu de la rénovation qu'il s'agisse de réparer une fuite d'eau, de la réparation ou le remplacement d'un chauffe-eau ... ou bien dans la construction neuve afin de réaliser une installation sanitaire de A à Z, à la recherche de ballons thermo-dynamique performant, d'un système de traitement de l'eau, Distritherm Services peut vous conseiller et vous fournir une large gamme produit disponible immédiatement ou bien sur commande avec des délais rapides.
                  </p>
                  <p>
                    Pour assurer la maintenance de vos installations, retrouvez les pièces et équipements nécessaires à la réparation ou l'entretien des équipements en chauffage, climatisation, en eau chaude et sanitaire.
                  </p>
                  <p>
                    Car votre activité nécessite de la précision et une grande connaissance technique tout en respectant les normes de sécurité, nous vous accompagnons dans votre choix de produits pour trouver la solution adaptée à vos chantiers.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Gamme sanitaire */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Une gamme sanitaire complète
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Pour compléter notre gamme plomberie, n'hésitez pas à vous renseigner sur notre gamme sanitaire ou en vous rendant dans l'un de nos magasins à Taverny ou Drancy.
                </p>
                <p>
                  Meubles sur mesure, miroirs, robinetterie, WC, receveurs de douche ...que ce soit pour équiper les salles de bain des particuliers, mais aussi pour les espaces sanitaires publics dans les bâtiments collectifs, bureaux, vestiaires dans les entreprises industrielles ....
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Je veux en savoir plus
                </Link>
              </div>
            </motion.div>

            {/* Expertise */}
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
                    <MdPlumbing className="text-white w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                  Car vous travaillez souvent dans l'urgence
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Nous savons que chaque projet est unique et nécessite des solutions adaptées. C'est pourquoi nos experts sont à votre écoute pour vous conseiller sur les meilleurs matériaux et équipements en fonction de vos besoins spécifiques. Que vous souhaitiez installer un réseau de distribution d'eau dans un immeuble à Montigny-lès-Cormeilles, rénover une salle de bain au Blanc-Mesnil, ou mettre en place un système de chauffage à Argenteuil, nos spécialistes vous orienteront vers les produits les mieux adaptés. Ils prendront en compte les contraintes techniques, les normes en vigueur et votre budget pour vous proposer des solutions optimales.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-blue-200 my-6">
                    <p className="font-medium">
                      <strong>À noter :</strong> Nos experts sont formés sur les dernières innovations en matière de plomberie et peuvent vous former à l'utilisation des nouvelles technologies en matière de raccordement, d'hygiène et d'économie.
                    </p>
                  </div>
                  <p>
                    Par ailleurs, nous comprenons l'importance de respecter les délais sur vos chantiers. C'est pourquoi nous veillons à avoir en stock 90 % des marchandises que nous vendons. Nos magasins ouvrent dès 6h30 pour les retraits matinaux, notre service commercial est prêt à vous servir tous les jours du lundi au vendredi jusqu'à 17h. Nous proposons la livraison en 48 heures sur toute la région parisienne et partout en France, garantissant un début de chantier dans les temps. Pour les commandes urgentes, notre service de « livraison et retrait express » permet une fourniture de vos équipements de plomberie dans les plus brefs délais.
                  </p>
                </div>
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
                Pourquoi choisir DISTRITHERM Services ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegLightbulb className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Expertise technique</h3>
                      <p className="text-gray-700">
                        Plus de 15 ans d'expérience dans le domaine de la plomberie pour vous conseiller au mieux sur vos projets.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <GiPipes className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Gamme complète</h3>
                      <p className="text-gray-700">
                        Une large sélection de produits de plomberie pour répondre à tous vos besoins, des plus courants aux plus spécifiques.
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
                        90% de nos produits sont disponibles immédiatement en stock, avec un service de livraison express en 48h.
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
                      <h3 className="font-semibold text-xl mb-2">Service personnalisé</h3>
                      <p className="text-gray-700">
                        Un interlocuteur unique qui comprend vos enjeux et vous accompagne dans la réussite de vos projets.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  En choisissant DISTRITHERM Services comme partenaire pour vos achats de matériel de plomberie, vous bénéficiez d'un interlocuteur unique qui comprend vos enjeux. Notre équipe est à votre service pour vous conseiller, répondre à vos questions et vous accompagner dans la réussite de vos projets. Avec notre large gamme de produits, notre expertise technique de plus de 15 ans, notre réactivité, vous avez tous les atouts en main pour réaliser des installations de plomberie de qualité. N'hésitez pas à nous contacter ou à passer commande. Chez DISTRITHERM Services, votre satisfaction est notre priorité.
                </p>
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en plomberie
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets de plomberie.
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

export default PlomberiePage; 