import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Définition des catégories avec leurs images et descriptions
const categories = [
  { 
    id: 'platerie', 
    name: 'Plâtrerie', 
    image: '/platerie-image.png',
    description: 'Solutions pour cloisons et plafonds'
  },
  { 
    id: 'isolation', 
    name: 'Isolation', 
    image: '/isolation-image.png',
    description: 'Matériaux isolants performants'
  },
  { 
    id: 'chauffage', 
    name: 'Chauffage', 
    image: '/chauffage-image2.png',
    description: 'Systèmes de chauffage efficaces'
  },
  { 
    id: 'climatisation', 
    name: 'Climatisation', 
    image: '/climatisation-image.png',
    description: 'Solutions de confort thermique'
  },
  { 
    id: 'sanitaire', 
    name: 'Sanitaire', 
    image: '/sanitaire-image2.png',
    description: 'Équipements pour salles de bain'
  },
  { 
    id: 'plomberie', 
    name: 'Plomberie', 
    image: '/plomberie-image.png',
    description: 'Tuyauterie et raccords professionnels'
  },
  { 
    id: 'electricite', 
    name: 'Energie solaire', 
    image: '/electricite-image.png',
    description: 'Matériel électrique de qualité'
  },
  { 
    id: 'outillage', 
    name: 'Outillage', 
    image: '/outillage.png',
    description: 'Outils pour tous vos travaux'
  },
  { 
    id: 'epi', 
    name: 'EPI', 
    image: '/epi-image.png',
    description: 'Équipements de protection individuelle'
  },
];

const GammeSection = () => {
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
    <section className="py-20 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-gray-100 -z-10"></div>
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
            Explorer nos univers produits
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Une offre complète de matériaux et équipements pour tous vos projets
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
                  <div className="relative h-56 w-full">
                    <Image
                      src={category.image}
                      alt={`Catégorie ${category.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#7CB9E8]">
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
        
        <div className="text-center mt-12">
          <Link 
            href="/gamme"
            className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-fade-in animate-delay-300"
          >
            Voir toute notre gamme
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-delay-300 { animation-delay: 0.3s; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default GammeSection; 