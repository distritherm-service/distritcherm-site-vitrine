'use client';

import React from 'react';
import Footer from '@/components/layout/Footer';
import HomeSlider from '@/components/acceuil/HomeSlider';
import ServicesSection from '@/components/acceuil/ServicesSection';
import GammeSection from '@/components/acceuil/GammeSection';
import AProposSection from '@/components/acceuil/AProposSection';
import DevisSection from '@/components/acceuil/DevisSection';
import OffreCompleteSection from '@/components/acceuil/OffreCompleteSection';
import ExpertSection from '@/components/acceuil/ExpertSection';
import ValuePropositionSection from '@/components/acceuil/ValuePropositionSection';
import PartnersCarousel from '@/components/acceuil/PartnersCarousel';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSlider />
      <main className="flex-grow">
        {/* Section Distritherm Services */}
        <ServicesSection />
        <br />
        <br />
        <br />
        {/* Section À Propos de Distritherm Services */}
        <AProposSection />
        
        {/* Section Découvrez notre gamme */}
        <GammeSection />
        
        {/* Section Devis */}
        <DevisSection />
        {/* offre complete section */}
        <OffreCompleteSection />
        {/* Section Expert */}
        <ExpertSection />
        {/* nos partenaire */}
        <PartnersCarousel />
        {/* Section Valeur Ajoutée */}
        <ValuePropositionSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
