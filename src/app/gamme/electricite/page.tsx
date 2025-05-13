'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import { MdSupportAgent, MdElectricalServices } from 'react-icons/md';
import { GiElectric, GiLightBulb } from 'react-icons/gi';
import { TbPlugConnected } from 'react-icons/tb';
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

const ElectricitePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/electricite.jpeg"
              alt="Matériel électrique et équipements"
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
                Matériel pour installation électrique
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Notre mission est de vous accompagner dans la réussite de vos projets.
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
                Vous êtes professionnel du bâtiment à la recherche de matériel électrique de qualité ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Notre mission est de vous accompagner dans la réussite de vos projets en vous proposant une gamme complète de matériaux électriques pour le matériel de chauffage, de climatisation raccorder, mais aussi de vous dépanner rapidement en vous proposant des équipements électriques pour le bon fonctionnement de vos installations.
                </p>
                <p>
                  C'est pourquoi nous proposons une vaste gamme de câbles électriques, d'isolants électriques et d'accessoires comme les disjoncteurs.
                </p>
                <p>
                  Pour accompagner la transition énergétique, nous distribuons également des bornes de recharge pour véhicules électriques, adaptées aux installations résidentielles et professionnelles.
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
                  Une gamme complète de matériel électrique en stock
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Nous pouvons répondre à tous vos besoins en matière d'équipements électriques.
                  </p>
                  <p>
                    Des câbles et fils électriques aux tableaux de distribution, en passant par l'appareillage, l'éclairage et les systèmes de protection, nous proposons des solutions adaptées à chaque type d'installation, qu'il s'agisse de logements individuels, de bâtiments collectifs ou de locaux professionnels.
                  </p>
                  <p>
                    Notre gamme comprend des disjoncteurs, interrupteurs différentiels, prises et interrupteurs, luminaires, systèmes de gestion d'énergie, ainsi que des solutions domotiques pour répondre aux exigences de confort et d'économie d'énergie. Nous proposons également des équipements pour les installations photovoltaïques et les bornes de recharge pour véhicules électriques.
                  </p>
                  <p>
                    Nos partenariats avec des fabricants de renom nous permettent de vous proposer des produits innovants, conformes aux dernières normes NF C 15-100 et aux réglementations en vigueur, tout en garantissant un excellent rapport qualité-prix.
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
                  Que vous recherchiez des matériaux haute performance pour des environnements exigeants ou des solutions économiques pour des installations standard, nous avons les connaissances et l'expérience nécessaires pour vous orienter vers les produits les mieux adaptés. N'hésitez pas à nous contacter pour bénéficier de conseils personnalisés et trouver les réponses à toutes vos questions.
                </p>
              </div>
            </motion.div>

            {/* L'avenir de l'électricité */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                L'avenir de l'électricité
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold mb-4">Solution photovoltaïque et borne de recharge</h3>
                <p>
                  A l'écoute du marché et pour répondre aux enjeux de la transition énergétique, Distritherm Services propose une gamme complète de matériel photovoltaïque et de bornes de recharge pour véhicules électriques. Nos onduleurs, panneaux solaires et accessoires de montage sont sélectionnés pour leur fiabilité et leurs performances.
                </p>
                <p>
                  Nous vous accompagnons dans le choix des équipements adaptés à vos projets d'installation, en tenant compte des contraintes techniques et réglementaires spécifiques à ces technologies. Nous nous formons et pouvons vous former aussi à la découverte et à l'apprentissage de cette nouvelle technologie et à tous ses atouts.
                </p>
                <p>
                  Notre offre photovoltaïque comprend des kits de modules de panneaux solaires haute performance allant de 3 à 9 Kw jusqu'au sur mesure pour des centrales solaires, des onduleurs de dernière génération et tous les accessoires nécessaires à une installation réussie adaptées aux installations résidentielles et professionnelles.
                </p>
                <p>
                  Nous étudions avec vous votre projet afin de vous orienter vers la solution adéquate à votre demande. Nos partenariats renforcés avec nos fournisseurs nous permettent de trouver vos produits pour vos chantiers en phovoltaïque. Découvrez également nos panneaux solaires thermiques dans la gamme sanitaire avec le chauffe-eau solaire combiné.
                </p>
                <p>
                  Avec les panneaux solaires, vos clients apprécieront la diminution de leurs factures d'énergies, la possibilité de générer leur propre électricité et d'utiliser cette énergie en auto-consommation pour leur bien être et leur confort.
                </p>
                <p>
                  Aller vers une énergie verte et une gestion des coûts énergétiques voici la solution que vous pouvez offrir à vos clients.
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
                  Un stock complet de matériel électrique et d'accessoires
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Nous savons que votre temps est précieux. Avec un stock de marchandises important, bénéficiez d'une disponibilité immédiate.
                  </p>
                  <p>
                    Lorsque vous commandez des matériaux électriques, nous nous engageons à vous les livrer dans un délai de 48 heures partout en France. Nos équipes logistiques sont expérimentées et organisées pour garantir une expédition rapide et un suivi rigoureux de vos commandes. Vous pouvez également choisir de retirer vos achats directement dans l'un de nos entrepôts en région parisienne sur Taverny (95) ou Drancy (93), pour encore plus de flexibilité.
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
                        Notre amplitude horaire étendue (6h30-17h) vous permet de récupérer votre matériel directement au magasin avant vos chantiers.
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
                      <h3 className="font-semibold text-xl mb-2">Livraison rapide et fiable</h3>
                      <p className="text-gray-700">
                        Un service de livraison express 48 heures sur toute la France.
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
                      <h3 className="font-semibold text-xl mb-2">Assistance technique</h3>
                      <p className="text-gray-700">
                        Une assistance technique par téléphone pour répondre à toutes vos questions sur les installations électriques.
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
                      <h3 className="font-semibold text-xl mb-2">Conseils normatifs</h3>
                      <p className="text-gray-700">
                        Des conseils sur les normes électriques en vigueur et les bonnes pratiques d'installation.
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
                DISTRITHERM Services, l'assurance d'un partenariat durable
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Avec plus de 15 années d'expertise dans le bâtiment, notamment dans les installations électriques, notre savoir-faire se ressentira dans nos échanges. Nous avons développé une connaissance approfondie des besoins des professionnels en matière de distribution de matériel électrique.
                </p>
                <p>
                  Aucune impasse n'est faite sur la qualité de nos prestations, assurant ainsi une satisfaction client élevée. Nous investissons continuellement dans la formation de nos équipes et l'optimisation de nos services pour rester votre partenaire de référence en région parisienne comme ailleurs.
                </p>
                <p>
                  Choisir DISTRITHERM Services, c'est opter pour un fournisseur de matériel électrique qui comprend vos enjeux et s'engage à vos côtés. Que vous interveniez sur des projets de rénovation ou des constructions neuves, nos équipes sont prêtes à vous accompagner. Rendez-vous dans nos magasins de Taverny et Drancy, ou contactez-nous pour bénéficier de nos compétences techniques et de nos conditions professionnelles privilégiées pour vos installations électriques en région parisienne.
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en matériel électrique
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets d'installations électriques.
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

export default ElectricitePage; 