'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import { GiSnowflake1, GiHeatHaze } from 'react-icons/gi';
import { MdSupportAgent, MdEngineering } from 'react-icons/md';
import { BsThermometerHalf } from 'react-icons/bs';
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

const ClimatisationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/climatisation.jpeg"
              alt="Solutions de climatisation"
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
                Tous les équipements de climatisation sont chez DISTRITHERM Services
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
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Vous êtes plombier chauffagiste à la recherche de solutions pour vos installations en climatisation ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Bienvenue chez DISTRITHERM Services. Situé à Taverny et à Drancy, trouvez dans l'un de nos magasins tout type de système de climatisation efficace, fiable, non énergivore à installer de manière temporaire ou définitive sur vos chantiers.
                </p>
                <p>
                  En quête du meilleur confort possible chez soi ou sur son lieu de travail, vous êtes souvent sollicités par des particuliers ou professionnels à la recherche d'une solution en climatisation. Que ce soit pour du résidentiel ou du bâtiment collectif et tertiaire, vous pouvez trouver au sein de notre magasin votre réponse pour accéder aux produits adaptés. En fonction de vos contraintes techniques, nous saurons vous proposer un système de climatisation performant pour n'importe quel espace.
                </p>
              </div>
            </motion.div>

            {/* Solutions de climatisation */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-50 rounded-3xl p-8 mb-16 shadow-sm border border-gray-100"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Des solutions de climatisation de grande qualité
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    En tant que professionnels de la vente de matériaux pour professionnels, nous proposons une vaste sélection de systèmes de climatisation, adaptés à tous types de bâtiments et d'espaces.
                  </p>
                  <p>
                    Des climatiseurs muraux aux systèmes centralisés, en passant par les unités de toiture, vous trouverez chez nous la solution idéale pour réguler la température des locaux de vos clients.
                  </p>
                  <p>
                    Exerçant dans le bâtiment depuis plus de 15 ans, nos experts sont à votre disposition pour vous guider dans le choix de la climatisation la mieux adaptée à votre projet, en tenant compte de critères tels que la superficie à climatiser, l'efficacité énergétique souhaitée et le budget à respecter.
                  </p>
                  <p>
                    Notre offre comprend, notamment :
                  </p>
                  <ul>
                    <li>les systèmes mono-split, parfaits pour climatiser une pièce unique</li>
                    <li>les multi-split, idéaux pour gérer plusieurs zones</li>
                    <li>les solutions gainables, pour une climatisation discrète et homogène</li>
                    <li>les systèmes VRV/VRF pour les grands espaces professionnels</li>
                    <li>les climatiseurs mobiles pour une flexibilité maximale</li>
                    <li>K7</li>
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
              </div>
            </motion.div>

            {/* Expertise et conseil */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Une expertise à votre service
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Caractéristiques, performance, prix, ... Que choisir ? On peut vite se perdre dans cette ère où tout évolue vitesse grand V. Nos relations de qualité avec nos fournisseurs nous permettent d'être à la pointe et de vous proposer un service et des conseils personnalisés pour vous faire gagner du temps et de l'énergie.
                </p>
                <p>
                  Vous pouvez demander à nos équipes de l'aide pour :
                </p>
                <ul>
                  <li>l'installation d'une pompe à chaleur air/air ou air/eau,</li>
                  <li>la mise en place d'un monobloc ou multi-split, constitué d'une unité extérieure raccordée à une ou plusieurs unités intérieures en fonction de vos besoins et exigences.</li>
                  <li>trouver la pompe à chaleur réversible employée à la fois pour le chauffage et pour le rafraîchissement.</li>
                </ul>
                <p>
                  Afin d'accompagner votre installation de climatisation, retrouvez les pompes à condensats, les goulottes en stock dans notre magasin et notre gamme accessoires complémentaire comme les cuivres frigorifiques, les supports anti-vibrations, les chaises de supportage, les gaines galvanisées.
                </p>
              </div>
            </motion.div>

            {/* Solutions VRV/VRF */}
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
                    <GiSnowflake1 className="text-white w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                  Solutions VRV/VRF pour projets d'envergure
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-center italic font-medium mb-6">
                    "Une bonne programmation des projets, c'est déjà 50 % des travaux réalisés." Moussa Laidi
                  </p>
                  <p>
                    Pour les bâtiments tertiaires et les grands projets commerciaux, nous proposons des systèmes VRV (Variable Refrigerant Volume) et VRF (Variable Refrigerant Flow).
                  </p>
                  <p>
                    Ces technologies de pointe permettent de gérer individuellement la température de chaque zone tout en optimisant la consommation énergétique. Nos conseillers techniques spécialisés vous accompagnent dans le dimensionnement de la machine et dans la sélection des équipements pour chaque chantier sur lequel vous intervenez. Etudier votre dossier, évaluer la puissance nécessaire, sensibiliser le client sur la technicité et l'efficacité du produit requis fait partie de notre travail.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nos conseils */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
                Nos conseils
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegLightbulb className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Étude préalable</h3>
                      <p className="text-gray-700">
                        Une étude de l'habitat vous permettra à déterminer la machine appropriée pour assurer le confort aussi bien en été qu'en hiver avec une climatisation réversible.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MdEngineering className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Formation technique</h3>
                      <p className="text-gray-700">
                        Il est nécessaire de respecter une procédure spécifique, si nécessaire, vous pouvez demander une formation technique au produit. Nous serons heureux de planifier un rendez-vous avec vous.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaTools className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Entretien régulier</h3>
                      <p className="text-gray-700">
                        Il est essentiel de maintenir la climatisation en bon état afin d'assurer son bon fonctionnement et sa durabilité. L'entretien joue un rôle important, ne le négligez pas.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <BsThermometerHalf className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Isolation et configuration</h3>
                      <p className="text-gray-700">
                        Avant d'équiper le logement, il est important de prendre en considération la qualité de l'isolation et la configuration des pièces. Faites vous épauler par notre conseiller technique.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Service logistique */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Un service logistique et d'expédition optimisé
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Que vous soyez à la recherche d'une solution ponctuelle ou d'un partenariat durable, notre équipe de Taverny et de Drancy est à votre écoute pour concrétiser vos chantiers d'installation de climatisation dans les meilleures conditions.
                </p>
                <p>
                  Nous savons que vos chantiers n'attendent pas. C'est pourquoi nous mettons un point d'honneur à avoir un stock constamment approvisionné. Dès lors, 90% de nos marchandises, dont des systèmes de climatisations performants, sont disponibles immédiatement dans nos entrepôts de Taverny ou à Drancy.
                </p>
                <p>
                  Fini les délais d'attente interminables et les retards sur vos projets. Avec DISTRITHERM Services, vous pouvez compter sur un retrait ou une livraison rapide de votre climatiseur, pour une réaliser votre installation dans les meilleurs délais. Nous nous engageons à vous fournir les équipements nécessaires au moment où vous en avez besoin.
                </p>
              </div>
            </motion.div>

            {/* Service de location */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-50 rounded-3xl p-8 mb-16 shadow-sm border border-gray-100"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Il vous manque une machine pour réaliser votre chantier ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Un système de location de machines professionnelles pour vos besoins ponctuels et spécifiques. Vous avez à disposition :
                  </p>
                  <ul>
                    <li>Carotteuse au diamant "HILTI"</li>
                    <li>Sertisseuse hydraulique "MULTITUBO"</li>
                  </ul>
                  <p>
                    Prix et conditions sur demande via l'espace contact ou par téléphone.
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en climatisation
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets de climatisation.
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

export default ClimatisationPage; 