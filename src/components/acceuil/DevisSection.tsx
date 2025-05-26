import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DevisSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Fond avec l'image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-devis.png"
          alt="Besoin d'un devis pour votre projet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-600/60" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'un devis pour votre projet ?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-white/90">
          Recevez rapidement une estimation sur mesure pour tous vos besoins en matériel pour vos chantiers.
          </p>
          
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Demander un devis
          </motion.a>
        </motion.div>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
    </section>
  );
};

export default DevisSection; 