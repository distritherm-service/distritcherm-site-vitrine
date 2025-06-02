'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import { MdSupportAgent, MdEnergySavingsLeaf } from 'react-icons/md';
import { GiHeatHaze, GiWaterDrop, GiSnowflake1 } from 'react-icons/gi';
import { TbTemperature } from 'react-icons/tb';
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

const IsolationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/isolation-image.png"
              alt="Solutions d'isolation thermique et acoustique"
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
                Solutions d'isolation thermique et acoustique
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
                  Vous êtes professionnel du bâtiment à la recherche de solutions d'isolation de qualité ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Dans un contexte où les normes énergétiques se renforcent et où la performance thermique des bâtiments devient primordiale, choisir les bonnes solutions d'isolation est essentiel pour la réussite de vos chantiers. La qualité des matériaux et la fiabilité de vos fournisseurs sont déterminantes pour garantir des résultats conformes aux attentes de vos clients.
                  </p>
                  <p>
                    Que vous soyez artisan, entreprise de construction ou spécialiste de la rénovation énergétique, votre expertise mérite d'être soutenue par un partenaire de confiance. DISTRITHERM Services, présent à Taverny et Drancy, s'engage à vos côtés pour tous vos projets d'isolation en Île-de-France, de Franconville à Bobigny, en passant par Argenteuil et Le Blanc-Mesnil, ainsi que dans toute la France.
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
                    src="/image-isolation.png"
                    alt="Isolation chantier"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[600px] max-h-[350px] mx-auto my-auto"
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
                  Une gamme complète de solutions d'isolation en stock
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Nous pouvons répondre à tous vos besoins en matière d'isolation thermique et acoustique.
                  </p>
                  <p>
                    De l'isolation des combles et des murs aux solutions pour planchers et toitures, en passant par les isolants écologiques et les systèmes d'étanchéité à l'air, nous proposons des solutions adaptées à chaque configuration et à chaque type de bâtiment.
                  </p>
                  <p>
                    Notre gamme comprend des laines minérales (laine de verre, laine de roche), des isolants synthétiques (polystyrène expansé et extrudé, polyuréthane), ainsi que des isolants biosourcés (laine de bois, ouate de cellulose, chanvre) pour répondre aux exigences environnementales les plus strictes. Nos solutions d'isolation sont sélectionnées pour leurs performances thermiques, acoustiques et leur durabilité.
                  </p>
                  <p>
                    Nos partenariats avec des fabricants français et européens de premier plan nous permettent de vous proposer des produits innovants, conformes aux dernières normes et réglementations thermiques, tout en garantissant un excellent rapport qualité-prix.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
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
                    src="/image-isolation.png"
                    alt="Gamme isolation"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
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
                  L'expertise DISTRITHERM pour vous servir
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Professionnels du bâtiment de formation, chez DISTRITHERM Services, nous ne laissons aucune place au hasard. Notre équipe technique maîtrise toutes les spécificités de chaque solution d'isolation proposée en magasin.
                  </p>
                  <p>
                    Ensemble, nous trouvons les matériaux adaptés à vos projets. Nous vous guidons dans le choix des isolants, l'évaluation des performances thermiques et acoustiques, et la sélection des accessoires nécessaires. De l'étude thermique préliminaire à la mise en œuvre, nous vous accompagnons à chaque étape. Nous analysons avec vous les contraintes spécifiques du bâtiment : type de construction, exposition, réglementation applicable, pour vous recommander la solution idéale.
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
                <div className="relative w-full h-full min-h-[80px] rounded-3xl overflow-hidden bg-white shadow-xl">
                  <Image
                    src="/isolation3.jpg"
                    alt="Expertise isolation"
                    fill
                    className="object-cover rounded-3xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 max-w-[400px] max-h-[250px] mx-auto my-auto"
                  />
                </div>
              </motion.div>
            </div>

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
                  Un stock complet d'accessoires et de produits complémentaires
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Une isolation réussie nécessite bien plus que le matériau isolant principal. C'est pourquoi nous stockons tous les accessoires et produits complémentaires dans nos entrepôts à Taverny et à Drancy.
                  </p>
                  <p>
                    Notre gamme isolation comprend tous les éléments indispensables :
                  </p>
                  <ul>
                    <li>des membranes d'étanchéité à l'air et pare-vapeur</li>
                    <li>des adhésifs et mastics spécialisés pour l'étanchéité</li>
                    <li>des suspentes, ossatures et profilés pour la pose</li>
                    <li>des fixations adaptées à chaque support</li>
                    <li>des solutions de traitement des ponts thermiques</li>
                    <li>des outils spécifiques pour la découpe et la pose</li>
                  </ul>
                  <p>
                    Tout notre matériel est sélectionné pour ses caractéristiques techniques et ses performances afin de répondre aux normes les plus strictes et garantir la qualité de vos installations.
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
                      <h3 className="font-semibold text-xl mb-2">Assistance technique</h3>
                      <p className="text-gray-700">
                        Une assistance technique par téléphone pour répondre à toutes vos questions sur les solutions d'isolation.
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
                      <h3 className="font-semibold text-xl mb-2">Conseils techniques</h3>
                      <p className="text-gray-700">
                        Des conseils personnalisés sur les meilleures pratiques d'isolation et les nouvelles réglementations thermiques.
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
                  Avec plus de 15 années d'expertise dans le bâtiment, notamment dans les solutions d'isolation thermique et acoustique, notre savoir-faire se ressentira dans nos échanges. Nous avons développé une connaissance approfondie des besoins des professionnels en matière de distribution de matériaux d'isolation.
                </p>
                <p>
                  Aucune impasse n'est faite sur la qualité de nos prestations, assurant ainsi une satisfaction client élevée. Nous investissons continuellement dans la formation de nos équipes et l'optimisation de nos services pour rester votre partenaire de référence en région parisienne comme ailleurs.
                </p>
                <p>
                  Choisir DISTRITHERM Services, c'est opter pour un fournisseur de solutions d'isolation qui comprend vos enjeux et s'engage à vos côtés. Que vous interveniez sur des projets de rénovation énergétique ou des constructions neuves, nos équipes sont prêtes à vous accompagner. Rendez-vous dans nos magasins de Taverny et Drancy, ou contactez-nous pour bénéficier de nos compétences techniques et de nos conditions professionnelles privilégiées pour vos chantiers d'isolation en région parisienne.
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en isolation
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Avec nos deux points de vente à Taverny et à Drancy, et notre expertise technique reconnue, nous sommes le partenaire idéal pour la réussite de vos projets d'isolation thermique et acoustique.
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

export default IsolationPage; 