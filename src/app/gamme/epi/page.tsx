'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaTruck, FaTools, FaRegLightbulb, FaRegClock, FaHardHat } from 'react-icons/fa';
import { MdSupportAgent, MdSecurity } from 'react-icons/md';
import { GiGloves, GiSafetyPin } from 'react-icons/gi';
import { TbEyeglass } from 'react-icons/tb';
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

const EPIPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          {/* Image d'arrière-plan */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/epi.jpeg"
              alt="Équipements de Protection Individuelle"
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
                L'univers des équipements de protection individuelle
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                Car la sécurité et la qualité des chantiers sont d'une grande importance, trouvez chez Distritherm Services les produits indispensables.
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
                Pour assurer le bon déroulement de votre activité
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Car la sécurité et la qualité des chantiers sont d'une grande importance, trouvez chez Distritherm Services les produits indispensables pour assurer le bon déroulement de votre activité que vous soyez spécialisé dans la peinture, le chauffage, la plomberie ou l'isolation... tout professionnel du bâtiment est concerné et trouvera au sein de nos magasins le nécessaire pour s'habiller et se protéger en toutes circonstances.
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
                  Une sélection rigoureuse pour tous les métiers du bâtiment
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Chez DISTRITHERM Services, nous travaillons en étroite collaboration avec des fabricants reconnus pour vous proposer des EPI de haute qualité. Chaque référence est minutieusement sélectionnée par nos experts à Taverny et à Drancy, qui s'assurent que les normes de sécurité les plus strictes sont respectées. Que vous soyez plombier, plaquiste, électricien ou intervenant dans tout autre corps de métier du bâtiment, vous trouverez chez nous les équipements de protection certifiés et adaptés à votre activité.
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
                Les E.P.I sont obligatoires, ils sont là pour protéger des risques
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Protection du crâne, protection du corps, protection visuelle, protection du visage, protection respiratoire aucune partie du corps n'est à négliger et le choix des équipements ne se fait pas à la légère.
                </p>
                <p>
                  Nous prenons le temps de comprendre vos besoins spécifiques pour vous orienter vers les solutions les plus pertinentes en termes de confort, de praticité et bien sûr de sécurité.
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
                  Notre gamme EPI comprend
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul>
                    <li>des casques de chantier aux normes EN 397 et EN 50365</li>
                    <li>des chaussures de sécurité avec embouts et semelles anti-perforation</li>
                    <li>des gants de protection contre les risques mécaniques, chimiques et thermiques</li>
                    <li>des visières, des lunettes et masques de protection pour les travaux générant des projections</li>
                    <li>des protections auditives comme des bouchons d'oreille et casques anti-bruit</li>
                  </ul>
                  <p>
                    Tous nos équipements sont sélectionnés pour leur conformité aux normes en vigueur et leur qualité, afin de garantir une protection optimale de vos équipes sur le terrain.
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
                Nos conseils
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Renouvelez vos équipements usagés et évitez des dangers superflus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRegClock className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Prenez soin de vos équipes</h3>
                      <p className="text-gray-700">
                        Assurez vous de bien les équiper, elles seront en mesure de travailler dans des conditions optimales.
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
                      <h3 className="font-semibold text-xl mb-2">Collection textile</h3>
                      <p className="text-gray-700">
                        Venez nous rendre visite et essayez notre collection textile : pulls, pantalons, gants, chaussures... Soyez unique et stylé avec la marque "Le Bosseur".
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
                      <h3 className="font-semibold text-xl mb-2">Disponibilité immédiate</h3>
                      <p className="text-gray-700">
                        En libre service aux magasins de Taverny (dans le Val d'Oise) ou Drancy (en Seine St Denis), nous veillons à vous mettre à disposition un grand nombre de références.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaHardHat className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Livraison chrono</h3>
                      <p className="text-gray-700">
                        Vous êtes déjà sur le chantier ? On est réactif, on vous propose de vous livrer en chrono. Envoyez nous votre commande.
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
                Facilement accessible avec parking pour vos véhicules utilitaires
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Notre équipe assure un suivi personnalisé de vos besoins et vous accompagne dans le renouvellement de vos équipements. Nous proposons également des solutions sur mesure pour les grands chantiers, avec la possibilité de constituer des lots d'EPI adaptés à vos équipes intervenantes.
                </p>
                <p>
                  Facilement accessible avec parking pour vos véhicules utilitaires, voici où nous trouver :
                </p>
                <ul>
                  <li>Sur Taverny : nos équipes vous accueillent de 6h30 à 17h du lundi au vendredi, samedi sur RDV.</li>
                  <li>Sur Drancy : de 7h à 17h, du lundi au vendredi.</li>
                </ul>
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
                Faites confiance à DISTRITHERM Services pour tous vos besoins en équipements de protection
              </h2>
              <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
                Et parce que se sentir bien et à l'aise dans notre tenue est plaisant, venez découvrir nos collections.
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

export default EPIPage; 