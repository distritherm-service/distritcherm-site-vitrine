import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUserPlus, FaTools, FaFileAlt } from 'react-icons/fa';
import { useCompteProModal } from '@/hooks/useCompteProModal';
import CompteProModal from '@/components/compte-pro/CompteProModal';

// Définition des services avec leurs icônes
const services = [
  {
    id: 'agences',
    title: 'Nos Agences en France',
    description: 'Trouvez l\'agence la plus proche de vous.',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-[#7CB9E8]/20 rounded-full group-hover:bg-[#7CB9E8]/30 transition-colors">
        <FaMapMarkerAlt className="w-8 h-8 text-[#007FFF]" />
      </div>
    ),
    link: '/qui-sommes-nous#nos-magasins'
  },
  
  {
    id: 'compte',
    title: 'Ouverture de compte',
    description: 'Ouvrez votre compte PRO en ligne et bénéficiez de tous les avantages DISTRITHERM.',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-[#7CB9E8]/20 rounded-full group-hover:bg-[#7CB9E8]/30 transition-colors">
        <FaUserPlus className="w-8 h-8 text-[#007FFF]" />
      </div>
    ),
    link: '/compte-pro'
  },
  {
    id: 'sav',
    title: 'SAV en ligne',
    description: 'Bénéficiez d\'un service en ligne et gérez vos SAV en direct.',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-[#7CB9E8]/20 rounded-full group-hover:bg-[#7CB9E8]/30 transition-colors">
        <FaTools className="w-8 h-8 text-[#007FFF]" />
      </div>
    ),
    link: '/contact'
  },
  {
    id: 'devis',
    title: 'Devis en ligne',
    description: 'Demandez vos devis en ligne et recevez nos offres dans les plus brefs délais.',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-[#7CB9E8]/20 rounded-full group-hover:bg-[#7CB9E8]/30 transition-colors">
        <FaFileAlt className="w-8 h-8 text-[#007FFF]" />
      </div>
    ),
    link: '/contact'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 80
    }
  })
};

const ServicesSection = () => {
  const { isOpen, open, close } = useCompteProModal();

  const handleServiceClick = (link: string) => {
    if (link === '/compte-pro') {
      open();
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-[#007FFF] to-blue-400 bg-clip-text text-transparent">Distritherm Services</span>
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-[#007FFF] to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Distritherm, votre <span className="text-[#007FFF] font-semibold">partenaire</span> indépendant spécialisé dans la distribution de matériel pour la <span className="text-[#007FFF] font-semibold">rénovation énergétique</span> de l'habitat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="relative group bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-blue-100"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight group-hover:text-[#007FFF] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-500 mb-6 text-base min-h-[56px]">{service.description}</p>
                <button 
                  onClick={() => handleServiceClick(service.link)}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#007FFF] to-blue-400 text-white text-2xl shadow-lg hover:scale-110 hover:shadow-blue-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <span className="font-bold text-3xl leading-none">+</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CompteProModal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ServicesSection; 