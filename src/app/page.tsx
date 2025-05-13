'use client';

import React from 'react';
import Footer from '@/components/layout/Footer';
import HomeSlider from '@/components/acceuil/HomeSlider';
import ServicesSection from '@/components/acceuil/ServicesSection';
import GammeSection from '@/components/acceuil/GammeSection';
import AProposSection from '@/components/acceuil/AProposSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSlider />
      <main className="flex-grow">
        {/* Section Distritherm Services */}
        <ServicesSection />
        
        {/* Section À Propos de Distritherm Services */}
        <AProposSection />
        
        {/* Section Découvrez notre gamme */}
        <GammeSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
